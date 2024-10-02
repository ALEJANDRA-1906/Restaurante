from rest_framework import routers
from .views import MesaViewSet, MenuViewSet, ReservaViewSet, ReservaMenuViewSet

# Crear un enrutador y registrar 
router = routers.DefaultRouter()
router.register('api/mesa', MesaViewSet, 'mesa')

router.register('api/menu', MenuViewSet, 'menu')
router.register('api/reservas', ReservaViewSet, 'reservas')

router.register('api/reservas-menus', ReservaMenuViewSet, 'reservas-menus')

# Las URLs de la API se determinan automáticamente en función del enrutador
urlpatterns = router.urls