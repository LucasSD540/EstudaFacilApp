from rest_framework import serializers
from ..models import Plans, PlanFeature

class PlanFeatureSerializer(serializers.ModelSerializer):
  class Meta:
    model = PlanFeature
    fields = ['text_content', "is_include"]

class PlansSerializer(serializers.ModelSerializer):
  features = PlanFeatureSerializer(many=True, read_only=True)

  class Meta:
    model = Plans
    fields = ['study_level', 'features', 'plan_name']
