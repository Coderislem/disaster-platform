document.addEventListener('DOMContentLoaded', () => {
    // إحصائيات الحرائق السنوية
    const yearlyStatsCtx = document.getElementById('yearlyStats').getContext('2d');
    new Chart(yearlyStatsCtx, {
        type: 'line',
        data: {
            labels: ['٢٠١٩', '٢٠٢٠', '٢٠٢١', '٢٠٢٢', '٢٠٢٣'],
            datasets: [{
                label: 'المساحة المحترقة (بالهكتار)',
                data: [45000, 68000, 52000, 73000, 58000],
                borderColor: 'rgba(230, 81, 0, 0.8)',
                backgroundColor: 'rgba(230, 81, 0, 0.1)',
                fill: true,
                tension: 0.3
            }, {
                label: 'عدد الحرائق',
                data: [1200, 1850, 1500, 2100, 1700],
                borderColor: 'rgba(191, 54, 12, 0.8)',
                backgroundColor: 'rgba(191, 54, 12, 0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'إحصائيات الحرائق السنوية',
                    font: {
                        size: 16,
                        family: 'Cairo'
                    }
                },
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Cairo'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            family: 'Cairo'
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Cairo'
                        }
                    }
                }
            }
        }
    });

    // أسباب الحرائق والتأثيرات
    const impactStatsCtx = document.getElementById('impactStats').getContext('2d');
    new Chart(impactStatsCtx, {
        type: 'doughnut',
        data: {
            labels: ['النشاط البشري', 'البرق', 'المعدات', 'أسباب طبيعية', 'غير معروف'],
            datasets: [{
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                    'rgba(230, 81, 0, 0.9)',
                    'rgba(230, 81, 0, 0.7)',
                    'rgba(230, 81, 0, 0.5)',
                    'rgba(230, 81, 0, 0.3)',
                    'rgba(230, 81, 0, 0.2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'أسباب الحرائق (%)',
                    font: {
                        size: 16,
                        family: 'Cairo'
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'Cairo'
                        }
                    }
                }
            }
        }
    });

    // تحديث تلقائي لوقت آخر تحديث
    function updateLastUpdateTime() {
        const lastUpdateElement = document.getElementById('lastUpdateTime');
        if (lastUpdateElement) {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            lastUpdateElement.textContent = `${hours}:${minutes}`;
        }
    }
    
    updateLastUpdateTime();
    setInterval(updateLastUpdateTime, 60000); // تحديث كل دقيقة
}); 