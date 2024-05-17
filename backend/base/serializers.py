from . models import Pin
from rest_framework import serializers

class GeneratePinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pin
        fields = ['school','department','student_matric_number',]

    def create(self, validated_data):
        pin = validated_data.pop('pin', None)

        # Create a new user profile instance
        user_pin = Pin(**validated_data)

        if pin is not None:
            pin.set_password(pin)
        user_pin.save()

        return user_pin

class VerifyPinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pin
        fields = ('pin',)

class GetPinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pin
        fields = ('pin',)