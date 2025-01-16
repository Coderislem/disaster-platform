document.addEventListener('DOMContentLoaded', () => {
    // Yearly Wildfire Statistics
    const yearlyStatsCtx = document.getElementById('yearlyStats').getContext('2d');
    new Chart(yearlyStatsCtx, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'Acres Burned (Millions)',
                data: [8.8, 4.7, 10.1, 7.1, 7.5],
                borderColor: 'rgba(230, 81, 0, 0.8)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Annual Wildfire Impact'
                }
            }
        }
    });

    // Wildfire Causes
    const impactStatsCtx = document.getElementById('impactStats').getContext('2d');
    new Chart(impactStatsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Human Activity', 'Lightning', 'Equipment', 'Other'],
            datasets: [{
                data: [85, 8, 5, 2],
                backgroundColor: [
                    'rgba(230, 81, 0, 0.8)',
                    'rgba(230, 81, 0, 0.6)',
                    'rgba(230, 81, 0, 0.4)',
                    'rgba(230, 81, 0, 0.2)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Wildfire Causes (%)'
                }
            }
        }
    });
}); 