from rest_framework import generics
from ..models import Plans, PlanFeature
from ..serializers import PlansSerializer, PlanFeatureSerializer

# Plans serializer

class PlanListCreateView(generics.ListCreateAPIView):
  queryset = Plans.objects.all()
  serializer_class = PlansSerializer

  def perform_create(self, serializer):
        serializer.save()

class PlanDetailView(generics.RetrieveAPIView):
    queryset = Plans.objects.all()
    serializer_class = PlansSerializer

class PlanListView(generics.ListAPIView):
  queryset = Plans.objects.all()
  serializer_class = PlansSerializer

class PlanUpdateView(generics.UpdateAPIView):
  queryset = Plans.objects.all()
  serializer_class = PlansSerializer

class PlanDeleteView(generics.DestroyAPIView):
  queryset = Plans.objects.all()
  serializer_class = PlansSerializer

# PlanFeature serializer

class PlanFeatureListCreateView(generics.ListCreateAPIView):
  queryset = PlanFeature.objects.all()
  serializer_class = PlanFeatureSerializer

  def perform_create(self, serializer):
        serializer.save()

class PlanFeatureListView(generics.ListAPIView):
  queryset = PlanFeature.objects.all()
  serializer_class = PlanFeatureSerializer

class PlanFeatureUpdateView(generics.UpdateAPIView):
  queryset = PlanFeature.objects.all()
  serializer_class = PlanFeatureSerializer

class PlanFeatureDeleteView(generics.DestroyAPIView):
  queryset = PlanFeature.objects.all()
  serializer_class = PlanFeatureSerializer
