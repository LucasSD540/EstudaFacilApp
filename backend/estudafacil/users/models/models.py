from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)

    def get_by_natural_key(self, email):
        return self.get(email=email)

class User(AbstractBaseUser):
  STUDY_LEVEL_CHOICES = [
        ('enem', 'Enem e Vestibular'),
        ('superior', 'Ensino Superior'),
        ('concurso', 'Concurso'),
    ]

  fullName = models.CharField(max_length=200)
  email = models.EmailField(max_length=254, unique=True)
  reset_token = models.CharField(max_length=128, blank=True, null=True)
  password = models.CharField(max_length=128)
  profilePicture = models.ImageField(upload_to='', blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  last_login = models.DateTimeField(blank=True, null=True)
  study_level = models.CharField(
        max_length=10,
        choices=STUDY_LEVEL_CHOICES,
        default="enem"
    )

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = []

  objects = UserManager()

  def __str__(self):
    return self.fullName
