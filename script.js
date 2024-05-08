const apikey = "df3d63459e846e0e7a0c55edc2364dfa";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector("#searchBtn");
const weathericon = document.querySelector(".weather-icon");
const weatherSection = document.querySelector(".weather");

async function checkweather(city) {
  weatherSection.style.display = "block";

  const response = await fetch(url + city + `&appid=${apikey}`);
  let data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
  document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
  document.querySelector(".wind").innerHTML = data.wind.speed + `km/h`;

  if (data.weather[0].main == "Clouds") {
    weathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weathericon.src = "images/snow.png";
  }
}
searchBtn.addEventListener("click", () => {
  if (searchBox.value.trim() !== "") {
    checkweather(searchBox.value);
  } else {
    alert("Please enter a city name.");
  }
});
