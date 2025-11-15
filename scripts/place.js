const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;

// Function to calculate windchill
let temperatureC = 5; // in °C
let windSpeedKmh = 15; // in km/h

// Windchill calculation function (Celsius)
function calculateWindChillC(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Function to check viability and return display
function getWindChillDisplayC(temp, speed) {
    if (temp <= 10 && speed > 4.8) { // Metric conditions
        return calculateWindChillC(temp, speed).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

// Display windchill when page loads
window.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.getElementById("windchill");
    if (windChillElement) {
        windChillElement.textContent = getWindChillDisplayC(temperatureC, windSpeedKmh);
    }
});
