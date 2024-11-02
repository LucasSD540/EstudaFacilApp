from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/estudafacilapp/", include('estudafacilapp.urls')),
    path("api/user/", include('users.urls')),
    path("api/doubt/", include('doubts.urls')),
]
