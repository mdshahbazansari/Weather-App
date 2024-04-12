const apiKey = `b2a95dd7b28fa79dae00966a4ce7805e`;
// const weatherCity = "narwana";

async function fetchWeatherData(weatherCity) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&units=metric&appid=${apiKey}`);

    const data = await response.json();
    updateWeatherUI(data);
    console.log(data)
}

const cityElement = document.querySelector(".city");
const temperatureElement = document.querySelector('.temprature');
const windSpeed = document.querySelector('.windSpeed');
const humidity = document.querySelector('.humidity');
const visibility = document.querySelector('.visibility');
const description = document.querySelector(".disc");
const date = document.querySelector(".date");

// fetchWeatherData();

function updateWeatherUI(data) {
    cityElement.textContent = data.name;
    temperatureElement.textContent = `${Math.round(data.main.temp)}`;
    windSpeed.textContent = `${data.wind.speed} km/h`;
    humidity.textContent = `${data.main.humidity} %`;
    visibility.textContent = `${data.visibility / 1000} km`;
    description.textContent = data.weather[0].description;

    const currentDate = new Date();
    date.textContent = currentDate.toDateString();
}

const formData = document.querySelector('.searchCity');
const SearchInput = document.querySelector('.serchInput');

formData.addEventListener('submit', function (e) {
    e.preventDefault();

    const weatherCity = SearchInput.value;
    if (weatherCity !== "") {
        fetchWeatherData(weatherCity);
        SearchInput.value = "";
    }
})