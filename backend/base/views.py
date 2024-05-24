from .models import Pin
from . serializers import GeneratePinSerializer,GetPinSerializer,VerifyPinSerializer
from rest_framework.decorators import api_view as av
from rest_framework.response import Response
from django.shortcuts import get_object_or_404 as go4
# Create your views here.

@av(["POST"])
def generate_user_pin(request):
    queryset = GeneratePinSerializer(data=request.data)
    print(queryset.initial_data)

    if queryset.is_valid():
        user = queryset.save()
        print("Success!")
        return Response('Success!',status=200)
    else:
        return Response({'Inavlid data':queryset.errors},status=400)

@av(["GET"])
def return_pin(request,matric_number):
    user = go4(Pin,student_matric_number=matric_number)
    queryset = GetPinSerializer(user)
    return Response(queryset.data,status=200)

@av(["GET"])
def verify_pin(request,pin):
    try:
        verify = Pin.objects.get(pin=pin)
    except:
        return Response({"error":'Pin doesn\'t exist!'},status=404)

    else:
        if verify.is_expired():
            return Response({"Invalid!":"Pin has expired!"},status=400)
        else:
            return Response("Valid!",status=200)