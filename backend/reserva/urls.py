from django.urls import path, include
from rest_framework import routers
from .views import MesaViewSet, MenuViewSet, ReservaViewSet

# Crear un enrutador y registrar los viewsets
router = routers.DefaultRouter()
router.register(r'mesa', MesaViewSet, basename='mesa')   # Eliminar 'api/' del registro
router.register(r'menu', MenuViewSet, basename='menu')   # Eliminar 'api/' del registro
router.register(r'reservas', ReservaViewSet, basename='reservas')  # Eliminar 'api/' del registro

# Las URLs de la API se determinan automáticamente en función del enrutador
urlpatterns = [
    path('api/', include(router.urls)),  # Prefijo 'api/' para todas las rutas
]
