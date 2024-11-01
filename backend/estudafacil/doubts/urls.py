from django.urls import path
from .views import DoubtListCreateView, DoubtListView, DoubtUpdateView, DoubtDeleteView

urlpatterns = [
    path('create/', DoubtListCreateView.as_view(), name='doubt-create'),
    path('list/', DoubtListView.as_view(), name='doubt-list'),
    path('update/<int:pk>/', DoubtUpdateView.as_view(), name='doubt-update'),
    path('delete/<int:pk>/', DoubtDeleteView.as_view(), name='doubt-delete'),
]

