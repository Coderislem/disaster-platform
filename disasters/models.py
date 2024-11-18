from django.db import models

class DisasterType(models.Model):
    """
    Represents types of disasters (e.g., Earthquake, Flood, Fire).
    """
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class Disaster(models.Model):
    """
    Represents a specific disaster with its details.
    """
    title = models.CharField(max_length=200)
    type = models.ForeignKey(DisasterType, on_delete=models.CASCADE, related_name="disasters")
    description = models.TextField()
    location = models.CharField(max_length=200, blank=True, null=True)
    date_occurred = models.DateField()
    is_active = models.BooleanField(default=True)  # To mark if it's ongoing

    def __str__(self):
        return self.title


class DisasterMedia(models.Model):
    """
    Represents media files (images/videos) related to a disaster.
    """
    disaster = models.ForeignKey(Disaster, on_delete=models.CASCADE, related_name="media")
    media_type = models.CharField(
        max_length=10,
        choices=[('image', 'Image'), ('video', 'Video')],
        default='image'
    )
    file = models.FileField(upload_to='disaster_media/')
    description = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return f"{self.media_type.capitalize()} for {self.disaster.title}"


class Resource(models.Model):
    """
    Represents downloadable resources like checklists and guides.
    """
    title = models.CharField(max_length=200)
    disaster = models.ManyToManyField(Disaster, related_name="resources", blank=True)
    file = models.FileField(upload_to='resources/')
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class EmergencyContact(models.Model):
    """
    Represents emergency contact details (e.g., hotlines, relief centers).
    """
    disaster = models.ForeignKey(Disaster, on_delete=models.CASCADE, related_name="emergency_contacts")
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.phone_number})"
