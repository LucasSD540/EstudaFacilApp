from django.urls import path
from .views import UserListCreateView, UserListView, UserUpdateView, UserDeleteView

urlpatterns = [
    path('create/', UserListCreateView.as_view(), name='user-create'),
    path('list/', UserListView.as_view(), name='user-list'),
    path('update/<int:pk>/', UserUpdateView.as_view(), name='user-update'),
    path('delete/<int:pk>/', UserDeleteView.as_view(), name='user-delete'),
]
