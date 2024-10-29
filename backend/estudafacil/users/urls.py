from django.urls import path
from .views import UserListCreateView, UserListView

urlpatterns = [
    path('create/', UserListCreateView.as_view(), name='user-list-create'),
    path('list/', UserListView.as_view(), name='user-list'),
]
