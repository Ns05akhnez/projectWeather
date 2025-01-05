const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=2b0e55b118c45eae8c28525895bb66fa&units=metric&q="

let temperature = document.querySelector('.temp');
let city = document.querySelector('.city');
let weather = document.querySelector('.weather__icon');
let searchCity = document.querySelector('.search-txt');
let searchBtn = document.querySelector('.search-btn');
let windSpeed = document.querySelector('.wind_speed');
let humidity = document.querySelector('.humidity');

let temperatureMax = document.querySelector('.temperature__up');
let temperatureMin = document.querySelector('.temperature__down');
// console.log(temperature).innerHTML
// console.log(city).innerHTML
// temperature.innerHTML = 20

// // console.log(search_city)
// console.log(windSpeed).innerHTML
// console.log(humidity).innerHTML
// console.log(temperatureMax).innerHTML
// console.log(temperatureMin).innerHTML


async function checkWeather(city) {
    const response = await fetch(apiUrl + city);
    let data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp);
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind_speed').innerHTML = Math.round(data.wind.speed) + "km/h";
    document.querySelector('.temperature_up').innerHTML = Math.round(data.main.temp_max) + '°C';
    document.querySelector('.temperature_down').innerHTML = Math.round(data.main.temp_min) + '°C';
    
    
    if (data.weather[0].main == "Rain") {
        weather.src = 'img/rainy.png'
    }

    else if (data.weather[0].main == "Snow") {
        weather.src = 'img/weather_snow.png'
    }
    
    else if (data.weather[0].main == "Clear") {
        weather.src = 'img/partly_cloudy_day.png'
    }
}

searchBtn.addEventListener('click', function() {
    console.log(searchCity.value)
    city.innerHTML = searchCity.value
    checkWeather(searchCity.value)
})