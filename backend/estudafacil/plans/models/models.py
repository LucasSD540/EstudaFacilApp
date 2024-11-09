from django.db import models

class PlanFeature(models.Model):
    text_content = models.CharField(max_length=100)

    def __str__(self):
        return self.text_content

class Plans(models.Model):
  STUDY_LEVEL_CHOICES = [
        ('enem', 'Enem e Vestibular'),
        ('superior', 'Ensino Superior'),
        ('concurso', 'Concurso'),
    ]

  is_include = models.BooleanField(blank="false", null="false")
  study_level = models.CharField(max_length=50,
        choices=STUDY_LEVEL_CHOICES,)
  features = models.ManyToManyField(PlanFeature)
  plan_name = models.CharField(max_length=50)

  def __str__(self):
    return self.plan_name
