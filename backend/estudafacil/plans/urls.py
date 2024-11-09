from django.urls import path
from .views import PlanListCreateView, PlanListView, PlanUpdateView, PlanDeleteView, PlanFeatureListCreateView, PlanFeatureListView, PlanFeatureUpdateView, PlanFeatureDeleteView

urlpatterns = [
    path('create/', PlanListCreateView.as_view(), name='plan-create'),
    path('list/', PlanListView.as_view(), name='plan-list'),
    path('update/<int:pk>/', PlanUpdateView.as_view(), name='plan-update'),
    path('delete/<int:pk>/', PlanDeleteView.as_view(), name='plan-delete'),
    path('feature/create/', PlanFeatureListCreateView.as_view(), name='plan-create'),
    path('feature/list/', PlanFeatureListView.as_view(), name='plan-list'),
    path('feature/update/<int:pk>/', PlanFeatureUpdateView.as_view(), name='plan-update'),
    path('feature/delete/<int:pk>/', PlanFeatureDeleteView.as_view(), name='plan-delete'),
]
