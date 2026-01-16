from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Users
from .serializer import UserSerializer

@api_view


