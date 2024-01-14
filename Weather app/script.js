// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather data
async function getWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to update the weather information on the page
async function updateWeather(location) {
    const weatherData = await getWeatherData(location);

    if (weatherData) {
        document.getElementById('location').textContent = `${weatherData.name}, ${weatherData.sys.country}`;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        document.getElementById('temperature').textContent = `${weatherData.main.temp}°C`;
        document.getElementById('description').textContent = weatherData.weather[0].description;
    }
}

// Initial update with default location (you can modify this)
updateWeather('YourDefaultLocation');

// Example: Updating weather when a user submits a form
document.getElementById('location-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const userLocation = document.getElementById('user-location').value;
    updateWeather(userLocation);
});


 