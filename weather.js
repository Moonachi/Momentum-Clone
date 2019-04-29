const weather = document.querySelector(".js-weather");
const position = document.querySelector(".js-position");

const API_KEY = "";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
      //console.log(response.json());
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} ℃`;
      position.innerText = `${place}`;
      // console.log(json);
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };

  saveCoords(coordsObj);
  getWeather(latitude, longitude);
  // console.log(position.coords.latitude);
  // console.log(position.coords.longitude);
}

function handleGeoError(position) {
  console.log("위치를 파악할 수 없습니다.");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
    //console.log(parseCoords);
  }
}

function init() {
  loadCoords();
}

init();
