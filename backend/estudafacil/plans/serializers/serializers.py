from rest_framework import serializers
from ..models import Plans, PlanFeature

class PlanFeatureSerializer(serializers.ModelSerializer):
  class Meta:
    model = PlanFeature
    fields = ['text_content']

class PlansSerializer(serializers.ModelSerializer):
  class Meta:
    model = Plans
    fields = ['is_include', 'study_level', 'features', 'plan_name']
