document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    const map = L.map('map').setView([36.4627, 7.4332], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add markers for facilities
    const facilities = [
        { name: 'مركز الإيواء المركزي', coords: [36.4627, 7.4332], type: 'shelter' },
        { name: 'مستشفى ابن زهر', coords: [36.4627, 7.4332], type: 'hospital' }
    ];

    facilities.forEach(facility => {
        L.marker(facility.coords)
            .addTo(map)
            .bindPopup(`<strong>${facility.name}</strong>`);
    });

    // Location buttons functionality
    document.querySelectorAll('.location-btn').forEach(button => {
        button.addEventListener('click', function() {
            const [lat, lng] = this.dataset.coords.split(',');
            map.setView([lat, lng], 15);
        });
    });
});