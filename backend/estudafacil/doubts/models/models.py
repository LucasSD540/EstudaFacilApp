from django.db import models

class Doubt(models.Model):
  title = models.CharField(max_length=200)
  text_content = models.TextField(blank=False, null=False)

  def __str__(self):
    return self.title
