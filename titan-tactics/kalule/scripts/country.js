document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = document.lastModified;

    const temperature = 25; // Static value for temperature in °C
    const windSpeed = 15; // Static value for wind speed in km/h

    const calculateWindChill = (temp, speed) => {
        if (temp <= 10 && speed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
        } else {
            return "N/A";
        }
    };

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill').textContent = windChill;
});
