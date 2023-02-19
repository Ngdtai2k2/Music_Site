const weatherWidget = document.querySelector(".weather-widget");
const locationName = weatherWidget.querySelector(".location");
const weatherIcon = weatherWidget.querySelector(".weather-icon");
const temperature = weatherWidget.querySelector(".temperature");
const description = weatherWidget.querySelector(".description");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = "88218997fa90e5a4d7fc374f986ffc17";

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        locationName.textContent = `${data.name}, ${data.sys.country}`;
        weatherIcon.style.backgroundImage = `url('http://openweathermap.org/img/w/${data.weather[0].icon}.png')`;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        description.textContent = data.weather[0].description;
      })
      .catch(error => console.log(error));
  });
}
// check box weather
const widget = document.querySelector('.weather-widget');
const toggle = document.getElementById('toggle-widget');
widget.style.display = 'none';
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    widget.style.display = 'block';
  } else {
    widget.style.display = 'none';
  }
});