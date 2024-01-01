const card = document.getElementById('weather-result');
const temperatureElement = document.getElementById('temperature');
const weatherDescriptionElement = document.getElementById('weather-description');

async function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;
    
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '741a82fdcemsh69d5ed5bdebcfd4p1ec1d4jsn60552e79b63a',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        temperatureElement.textContent = `${result.temp} °C`;
        weatherDescriptionElement.textContent = result.weather_description;
        document.getElementById('cloud-pct').textContent = result.cloud_pct;
        document.getElementById('humidity').textContent = result.humidity;
        document.getElementById('min-temp').textContent = result.min_temp;
        document.getElementById('max-temp').textContent = result.max_temp;
        document.getElementById('wind-speed').textContent = result.wind_speed;
        document.getElementById('wind-degrees').textContent = result.wind_degrees;
        document.getElementById('sunrise').textContent = result.sunrise;
        document.getElementById('sunset').textContent = result.sunset;
        card.style.display = 'block';
    } catch (error) {
        console.error(error);
        card.style.display = 'none';
    }
}