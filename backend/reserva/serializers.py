
from rest_framework import serializers
from .models import Mesa, Menu, Reserva, ReservaMenu

class MesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesa
        fields = '__all__'

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'
class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = '__all__'

class ReservaMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservaMenu
        fields = '__all__'
