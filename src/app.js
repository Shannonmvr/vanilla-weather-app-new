function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "80ab7od3ab75f07480betdd57ff51e6b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=New York&key=80ab7od3ab75f07480betdd57ff51e6b&units=metric";

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
