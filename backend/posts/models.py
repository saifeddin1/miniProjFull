from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=150)
    author = models.CharField(max_length=150)
    body = models.CharField(max_length=500)
    createdAt = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.title
