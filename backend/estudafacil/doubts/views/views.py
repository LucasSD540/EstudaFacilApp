from rest_framework import generics
from ..models import Doubt
from ..serializers import DoubtSerializer

class DoubtListCreateView(generics.ListCreateAPIView):
  queryset = Doubt.objects.all()
  serializer_class = DoubtSerializer

  def perform_create(self, serializer):
    serializer.save()

class DoubtListView(generics.ListAPIView):
  queryset = Doubt.objects.all()
  serializer_class = DoubtSerializer

class DoubtUpdateView(generics.UpdateAPIView):
  queryset = Doubt.objects.all()
  serializer_class = DoubtSerializer

class DoubtDeleteView(generics.DestroyAPIView):
  queryset = Doubt.objects.all()
  serializer_class = DoubtSerializer
