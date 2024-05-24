from django.db import models
import uuid, re
from datetime import timedelta
from django.utils import timezone

class Pin(models.Model):
    class School_Choices(models.TextChoices):
        SCHOOL_OF_SCIENCE_AND_COMPUTER_STUDIES = 'SCHOOL OF SCIENCE AND COMPUTER STUDIES - SSCSS'
        SCHOOL_OF_BUSINESS_STUDIES = 'SCHOOL OF BUSINESS STUDIES - SBS'
        SCHOOL_OF_ENGINEERING = 'SCHOOL OF ENGINEERING - SOET'
        SCHOOL_OF_AGRICULTURE_AND_AGRICULTURAL_TECHNOLOGY  ='SCHOOL OF AGRICULTURE AND AGRICULTURAL TECHNOLOGY - SAAT'
        SCHOOL_OF_ENVIRONMENTAL_STUDIES = 'SCHOOL OF ENVIRONMENTAL STUDIES - SOES'

    school = models.CharField(choices=School_Choices.choices,max_length=150,blank=False,null=False)
    department = models.CharField(max_length=100,blank=False,null=False)
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
        return f'{self.student_matric_number} - {self.department} {self.pin}'

    def is_expired(self):
        return timezone.now() > self.expiry_date
        