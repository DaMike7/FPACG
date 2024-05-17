from django.urls import path
from .views import *

urlpatterns=[
    path('generate-pin/',generate_user_pin),
    path('return-pin/<str:matric_number>/',return_pin),
]