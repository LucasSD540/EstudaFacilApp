from django.urls import path
from .views import UserListCreateView, UserListView, UserUpdateView, UserDeleteView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name="token-obtain-pair"),
    path('token/refresh/', TokenRefreshView.as_view(), name="token-refresh"),
    path('create/', UserListCreateView.as_view(), name='user-create'),
    path('list/', UserListView.as_view(), name='user-list'),
    path('update/<int:pk>/', UserUpdateView.as_view(), name='user-update'),
    path('delete/<int:pk>/', UserDeleteView.as_view(), name='user-delete'),
]
