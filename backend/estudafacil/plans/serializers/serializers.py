from rest_framework import serializers
from ..models import Plans, PlanFeature

class PlanFeatureSerializer(serializers.ModelSerializer):
  class Meta:
    model = PlanFeature
    fields = ['id', 'text_content', 'is_include']

class PlansSerializer(serializers.ModelSerializer):
  features = serializers.PrimaryKeyRelatedField(
        queryset=PlanFeature.objects.all(), many=True
    )

  features_details = PlanFeatureSerializer(source="features", many=True, read_only=True)

  class Meta:
    model = Plans
    fields = ['study_level', 'features', 'features_details', 'plan_name', 'plan_price']
