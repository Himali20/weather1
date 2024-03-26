const locationInput = document.getElementById('location');
const searchButton = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

const API_KEY = '89a5be914342502a06589273ecc79615'; // key for OpenWeatherMap API

searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const city = data.name;
      const temp = Math.round(data.main.temp - 273.15); // Convert temp in Kelvin to Celsius
      const description = data.weather[0].main;
      weatherInfo.textContent = `Weather in ${city}: ${temp}°C, ${description}`;  // gives output as city: temp in celsius, description
    })
    .catch(error => {
      weatherInfo.textContent = `Error: ${error}`;
    });
});
