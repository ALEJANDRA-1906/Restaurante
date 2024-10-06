# Generated by Django 4.2.6 on 2024-10-06 01:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reserva', '0002_delete_reserva'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reserva',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('telefono', models.CharField(max_length=15)),
                ('num_comensales', models.PositiveIntegerField()),
                ('celebracion', models.CharField(max_length=100)),
                ('fecha', models.DateField()),
                ('hora', models.TimeField()),
                ('mesa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reserva.mesa')),
            ],
        ),
    ]
