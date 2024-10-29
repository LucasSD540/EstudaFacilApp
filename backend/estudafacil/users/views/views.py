from rest_framework import generics
from ..serializers import UserSerializer
from ..models import User

class UserListCreateView(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

  def perform_create(self, serializer):
    serializer.save()

class UserListView(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
