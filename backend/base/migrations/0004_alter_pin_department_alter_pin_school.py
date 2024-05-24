# Generated by Django 5.0.4 on 2024-05-21 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_pin_expiry_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pin',
            name='department',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='pin',
            name='school',
            field=models.CharField(choices=[('SCHOOL OF SCIENCE AND COMPUTER STUDIES - SSCSS', 'School Of Science And Computer Studies'), ('SCHOOL_OF BUSINESS STUDIES - SBS', 'School Of Business Studies'), ('SCHOOL OF ENGINEERING - SOE', 'School Of Engineering')], max_length=50),
        ),
    ]
