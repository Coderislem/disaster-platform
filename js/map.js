// map.js
class WorldDisasterMap {
    constructor() {
        // Define colors for each disaster type
        this.disasterColors = {
            earthquake: '#FF4136',    // Red
            tsunami: '#39CCCC',       // Cyan
            hurricane: '#B10DC9',     // Purple
            wildfire: '#FF851B',      // Orange
            flood: '#0074D9',         // Blue
            volcano: '#85144b',       // Dark red
            tornado: '#FFD700'        // Gold
        };

        this.disasterData = {
            USA: {
                fillColor: this.disasterColors.hurricane,
                primaryDisaster: 'hurricane',
                disasters: ['Hurricanes', 'Tornadoes', 'Wildfires']
            },
            JPN: {
                fillColor: this.disasterColors.earthquake,
                primaryDisaster: 'earthquake',
                disasters: ['Earthquakes', 'Tsunamis', 'Typhoons']
            },
            IDN: {
                fillColor: this.disasterColors.tsunami,
                primaryDisaster: 'tsunami',
                disasters: ['Tsunamis', 'Volcanic Eruptions', 'Floods']
            },
            AUS: {
                fillColor: this.disasterColors.wildfire,
                primaryDisaster: 'wildfire',
                disasters: ['Wildfires', 'Cyclones', 'Floods']
            },
            CHN: {
                fillColor: this.disasterColors.flood,
                primaryDisaster: 'flood',
                disasters: ['Floods', 'Earthquakes', 'Typhoons']
            },
            ITA: {
                fillColor: this.disasterColors.volcano,
                primaryDisaster: 'volcano',
                disasters: ['Volcanic Activity', 'Earthquakes', 'Floods']
            },
            BRA: {
                fillColor: this.disasterColors.flood,
                primaryDisaster: 'flood',
                disasters: ['Floods', 'Landslides', 'Droughts']
            },
            MEX: {
                fillColor: this.disasterColors.earthquake,
                primaryDisaster: 'earthquake',
                disasters: ['Earthquakes', 'Hurricanes', 'Floods']
            }
            // Add more countries as needed
        };
    }

    initialize() {
        this.map = new Datamap({
            element: document.getElementById('disaster-map'),
            responsive: true,
            fills: {
                defaultFill: '#CCCCCC',
                ...this.disasterColors
            },
            data: this.disasterData,
            geographyConfig: {
                highlightOnHover: true,
                popupOnHover: true,
                highlightFillColor: (geo) => {
                    return this.disasterData[geo.id] ? 
                        this.lightenColor(this.disasterData[geo.id].fillColor, 20) : 
                        '#DDDDDD';
                },
                borderColor: '#FFFFFF',
                highlightBorderColor: '#FFFFFF',
                highlightBorderWidth: 1,
                popupTemplate: (geography, data) => {
                    if (data && data.disasters) {
                        return `
                            <div class="map-tooltip">
                                <h3>${geography.properties.name}</h3>
                                <p class="primary-disaster">Primary Risk: 
                                    <span style="color: ${data.fillColor}">
                                        ${this.capitalizeFirst(data.primaryDisaster)}
                                    </span>
                                </p>
                                <ul class="disaster-list">
                                    ${data.disasters.map(disaster => 
                                        `<li>${disaster}</li>`).join('')}
                                </ul>
                            </div>
                        `;
                    }
                    return `<div class="map-tooltip">${geography.properties.name}</div>`;
                }
            }
        });

        this.addLegend();
        
        // Make map responsive
        window.addEventListener('resize', () => {
            this.map.resize();
        });
    }

    addLegend() {
        const legend = d3.select('#disaster-map')
            .append('div')
            .attr('class', 'map-legend')
            .html(`
                <h4>Primary Disaster Types</h4>
                ${Object.entries(this.disasterColors).map(([type, color]) => `
                    <div class="legend-item">
                        <span class="color-box" style="background-color: ${color}"></span>
                        <span class="legend-label">${this.capitalizeFirst(type)}</span>
                    </div>
                `).join('')}
            `);
    }

    capitalizeFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    lightenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            G = (num >> 8 & 0x00FF) + amt,
            B = (num & 0x0000FF) + amt;
        return '#' + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + 
            (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
    }
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const worldDisasterMap = new WorldDisasterMap();
    worldDisasterMap.initialize();
});