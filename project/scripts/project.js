const sensorData = [
    { name: "AUV-Alpha", status: "ONLINE", battery: "88%", lastUpdated: Math.floor(Date.now() / 1000), latitude: -0.7442, longitude: -90.3118},
    { name: "AUV-Betha", status: "OFFLINE", battery: "12%", lastUpdated: Math.floor(Date.now() / 1000), latitude: 0.3275, longitude: -90.3392},
    { name: "Temperature Sensor", status: "ONLINE", battery: "50%", lastUpdated: Math.floor(Date.now() / 1000), latitude: -0.9015, longitude: -89.6095}
];

function initMap(sensors) {
    const map = L.map('fleet-map').setView([-0.0, -90.31], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    sensors.forEach(sensor => {
        L.marker([sensor.latitude, sensor.longitude])
        .addTo(map)
        .bindPopup(`<b>${sensor.name}</b><br>Status: ${sensor.status}`)
    })
}

function formatUnixTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleDateString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

function renderCards(sensors) {
    const container = document.getElementById("dashboard-grid");
    const template = document.getElementById("sensor-card-template");

    container.innerHTML = "";

    sensors.forEach(sensor => {
        const time = formatUnixTime(sensor.lastUpdated);
        const clone = template.content.cloneNode(true);
        
        clone.querySelector(".card-title").textContent = sensor.name;

        const statusEl = clone.querySelector(".card-status");
        statusEl.textContent = sensor.status;
        if (sensor.status.toUpperCase() === "ONLINE") {
            statusEl.classList.add("status-online");
        } else {
            statusEl.classList.add("status-offline");
        }

        clone.querySelector(".card-metric").textContent = sensor.battery;
        clone.querySelector(".card-timestamp").textContent = time;
        
        container.appendChild(clone);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedFilter = localStorage.getItem('lastFilter');
    const filterSelect = document.querySelector("#status-filter");

    let initialData = sensorData;

    if (savedFilter && savedFilter !== "ALL") {
        filterSelect.value = savedFilter;
        initialData = sensorData.filter(sensor => sensor.status.toUpperCase() === savedFilter);
    }
    initMap(sensorData);
    renderCards(initialData);

    const menuButton = document.querySelector('#menu');
    const navigation = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });

    document.querySelector("#status-filter").addEventListener("change", (e) => {
        const selected = e.target.value;
        localStorage.setItem('lastFilter', selected);
        if (selected === "ALL") {
            renderCards(sensorData);
        } else {
            const filtered = sensorData.filter(sensor => sensor.status.toUpperCase() === selected);
            renderCards(filtered);
        }
    });

    document.querySelector("#currentyear").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;

});