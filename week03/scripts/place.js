document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 8;
const windSpeed = 15;

const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

if (temperature <= 10 && windSpeed > 4.8) {
    const chillFactor = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = `${chillFactor.toFixed(1)} °C`;
} else {
    document.getElementById("windchill").textContent = "N/A"
}