# Generated by Django 5.0.4 on 2024-05-16 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_alter_pin_student_matric_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='pin',
            name='expiry_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
