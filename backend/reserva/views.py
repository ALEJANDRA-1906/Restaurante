from rest_framework import viewsets
from rest_framework.permissions import AllowAny  # Cambia esto según tus necesidades
from .models import Mesa, Menu, Reserva, ReservaMenu
from .serializers import MesaSerializer, MenuSerializer, ReservaSerializer, ReservaMenuSerializer

class MesaViewSet(viewsets.ModelViewSet):
    queryset = Mesa.objects.all()
    serializer_class = MesaSerializer
    permission_classes = [AllowAny] 

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = [AllowAny]  

class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer
    permission_classes = [AllowAny]

class ReservaMenuViewSet(viewsets.ModelViewSet):
    queryset = ReservaMenu.objects.all()
    serializer_class = ReservaMenuSerializer
    permission_classes = [AllowAny]  
