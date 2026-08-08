const telemetryHistory = {
    "AUV-Alpha": {
        currentTemp: 18.4,
        maxTemp: 21.2,
        minTemp: 14.1,
        timestamps: ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25"],
        readings: [18.1, 18.2, 18.0, 18.3, 18.5, 18.4]
    },
    "AUV-Betha": {
        currentTemp: 16.2,
        maxTemp: 19.8,
        minTemp: 12.5,
        timestamps: ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25"],
        readings: [16.8, 16.5, 16.3, 16.1, 16.0, 16.2]
    },
    "Temperature Sensor": {
        currentTemp: 22.1,
        maxTemp: 24.5,
        minTemp: 19.0,
        timestamps: ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25"],
        readings: [21.5, 21.8, 22.0, 22.3, 22.2, 22.1]
    }
};

let chartInstance = null;

function updateTelemetryDisplay(deviceName) {
    const data = telemetryHistory[deviceName];
    if (!data) return;

    document.getElementById("temp-value").textContent = data.currentTemp;
    document.getElementById("max-temp").textContent = data.maxTemp;
    document.getElementById("min-temp").textContent = data.minTemp;
    document.getElementById("chart-title").textContent = deviceName;

    if (chartInstance) {
        chartInstance.destroy();
    }

    const ctx = document.getElementById("telemetryChart").getContext("2d");
    chartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: data.timestamps,
            datasets: [{
                label: "Temperature °C",
                data: data.readings,
                borderColor: "#0284c7",
                // backgroundColor: 
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {beginAtZero: false}
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector('#menu');
    const navigation = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });

    const deviceSelect = document.querySelector("#device-select");
    if (deviceSelect) {
        Object.keys(telemetryHistory).forEach(device => {
            const option = document.createElement("option");
            option.value = device;
            option.textContent = device;
            deviceSelect.appendChild(option);
        });
    }


    updateTelemetryDisplay(deviceSelect.value);
    deviceSelect.addEventListener("change", (e) => {
        updateTelemetryDisplay(e.target.value);
    });

    document.querySelector("#currentyear").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;

});