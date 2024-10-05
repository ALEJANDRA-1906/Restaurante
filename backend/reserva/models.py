from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.core.exceptions import ValidationError

class Mesa(models.Model):
    capacidad = models.IntegerField(default=2)  # Capacidad de la mesa, valor por defecto 2

class Menu(models.Model):
    titulo = models.CharField(max_length=100, null=True, blank=True)
    foto = models.ImageField("foto", upload_to='menu_fotos/', null=True, blank=True) 
    descripcion = models.CharField(max_length=255) 
    precio = models.DecimalField(max_digits=10, decimal_places=2) 

class Reserva(models.Model):
    fecha_reserva = models.DateTimeField()  
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)  
    mesa = models.ForeignKey(Mesa, on_delete=models.CASCADE)
    menus = models.ManyToManyField(Menu, through='ReservaMenu', related_name='reservas')  
    def clean(self):
        # Validación para asegurar que la fecha y hora de la reserva no sean en el pasado
        if self.fecha_reserva < timezone.now():
            raise ValidationError("La fecha y hora de la reserva no pueden estar en el pasado.")

class ReservaMenu(models.Model):
    reserva = models.ForeignKey(Reserva, on_delete=models.CASCADE) 
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)  
    cantidad = models.PositiveIntegerField(default=1)  
