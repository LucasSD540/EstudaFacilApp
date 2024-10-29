from django.contrib.auth.models import AbstractBaseUser
from django.db import models

class User(AbstractBaseUser):
  fullName = models.CharField(max_length=200)
  email = models.EmailField(max_length=254)
  password = models.CharField(max_length=128)
  profilePicture = models.ImageField(upload_to='', blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  last_login = models.DateTimeField(blank=True, null=True)

  USERNAME_FIELD = 'email'

  def __str__(self):
    return self.fullName
