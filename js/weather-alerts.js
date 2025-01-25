document.addEventListener('DOMContentLoaded', function() {
    // Initialize map centered on Guelma, Algeria with wider view
    const map = L.map('map').setView([36.4627, 7.4332], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add weather markers for Guelma region with ~20km spacing
    const alerts = [
        { 
            lat: 36.4627, 
            lng: 7.4332, 
            type: 'severe', 
            message: 'تنبيه من الأمطار الغزيرة',
            location: 'قالمة المدينة'
        },
        { 
            lat: 36.2731, 
            lng: 7.2614, 
            type: 'warning', 
            message: 'احتمال فيضانات',
            location: 'وادي الزناتي'
        },
        { 
            lat: 36.6365, 
            lng: 7.3888, 
            type: 'alert', 
            message: 'رياح قوية',
            location: 'حمام دباغ'
        },
        { 
            lat: 36.4467, 
            lng: 7.1647, 
            type: 'warning', 
            message: 'أمطار متوسطة',
            location: 'عين مخلوف'
        }
    ];

    // Custom icons based on alert type
    const icons = {
        severe: L.icon({
            iconUrl: '../images/severe-weather.png',
            iconSize: [50, 50],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        }),
        warning: L.icon({
            iconUrl: '../images/severe-weather.png',
            iconSize: [50, 50],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        }),
        alert: L.icon({
            iconUrl: '../images/severe-weather.png',
            iconSize: [50, 50],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        })
    };

    alerts.forEach(alert => {
        const marker = L.marker([alert.lat, alert.lng], {
            icon: icons[alert.type]
        })
        .addTo(map)
        .bindPopup(`
            <div class="alert-popup">
                <h3>${alert.location}</h3>
                <strong>${alert.message}</strong>
            </div>
        `);
    });
});