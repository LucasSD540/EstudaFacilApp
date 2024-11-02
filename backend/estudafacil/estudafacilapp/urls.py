from django.urls import path
from .views import send_password_reset_email, reset_password

urlpatterns = [
  path('send-email/', send_password_reset_email, name='send-password-reset-email'),
  path('reset-password/<int:user_id>/<str:token>/', reset_password, name='reset-password'),
]
