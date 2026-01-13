from django.db import models


class Book(models.Model):
    tittle =models.CharField(max_length=50)
    release_Year = models.IntegerField()


    def __str__(self):
        return self.tittle