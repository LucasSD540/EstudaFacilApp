# Generated by Django 5.1.2 on 2024-11-08 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PlanFeature',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text_content', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Plans',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_include', models.BooleanField(blank='false', null='false')),
                ('study_level', models.CharField(choices=[('enem', 'Enem e Vestibular'), ('superior', 'Ensino Superior'), ('concurso', 'Concurso')], max_length=50)),
                ('plan_name', models.CharField(max_length=50)),
                ('features', models.ManyToManyField(to='plans.planfeature')),
            ],
        ),
    ]
