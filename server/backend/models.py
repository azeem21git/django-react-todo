from django.db import models



class Users(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    phone=models.CharField(max_length=15)
    password=models.CharField(max_length=128)




def __str__(self):
    return f"{self.name}({self.email})"
   





