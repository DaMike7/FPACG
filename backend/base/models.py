from django.db import models
import uuid, re
from datetime import timedelta
from django.utils import timezone

class Pin(models.Model):
    class School_Choices(models.TextChoices):
        SCHOOL_OF_SCIENCE_AND_COMPUTER_STUDIES = 'SCHOOL_OF_SCIENCE_AND_COMPUTER_STUDIES'
        SCHOOL_OF_BUSINESS = 'SCHOOL_OF_BUSINESS'
        SCHOOL_OF_ENGINEERING = 'SCHOOL_OF_ENGINEERING'

    school = models.CharField(choices=School_Choices.choices,max_length=40,blank=False,null=False)
    department = models.CharField(max_length=50,blank=False,null=False)
    student_matric_number = models.CharField(max_length=20,blank=False,null=False)
    pin = models.CharField(max_length=10,default='',unique=True)
    date = models.DateTimeField(blank=True,auto_now=True)
    expiry_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ['date']

    def save(self, *args, **kwargs):
        if not self.pin:
            mat_num = self.student_matric_number[-4:]
            pin = re.findall(r"[a-zA-Z0-9]", mat_num)
            pin = "".join(pin)
            self.pin = pin + str(uuid.uuid4()).replace("-", "")[:6]
            self.expiry_date = timezone.now() + timedelta(hours=3)
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.student_matric_number} - {self.department}'

    def is_expired(self):
        return timezone.now() > self.expiry_date
        