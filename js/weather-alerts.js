document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    const map = L.map('map').setView([24.7136, 46.6753], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add weather markers (example)
    const alerts = [
        { lat: 24.7136, lng: 46.6753, type: 'severe', message: 'عاصفة رملية' },
        { lat: 26.2361, lng: 50.0393, type: 'warning', message: 'رياح شديدة' }
    ];

    alerts.forEach(alert => {
        const marker = L.marker([alert.lat, alert.lng])
            .addTo(map)
            .bindPopup(`<strong>${alert.message}</strong>`);
    });
});