# Generated by Django 5.0.1 on 2024-01-27 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leagal', '0004_alter_user_managers'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='full_name',
            field=models.CharField(max_length=100),
        ),
    ]
