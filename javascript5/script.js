$(document).ready(function () {
  $('#submitButton').click(function () {
      var inputCity = $('#cityInput').val();
      fetchCurrentWeather(inputCity);
  });
});

function fetchCurrentWeather(city) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=fa7d90539f9c358ed9f6063d051af90d&units=metric')
      .then(response => response.json())
      .then(data => {
          var nameValue = data['name'];
          var tempValue = data['main']['temp'];
          var feelsLikeValue = data['main']['feels_like'];
          var humidityValue = data['main']['humidity'];
          var cloudsValue = data['clouds']['all'];
          var windSpeedValue = data['wind']['speed'];

          $('#nome').text(nameValue);
          $('.temp').text("Temperatura: " + tempValue + "°C");
          $('.sentono').text("Si sentono come: " + feelsLikeValue + "°C");
          $('.umidita').text("Umidità: " + humidityValue + "%");
          $('.nuvole').text("Nuvole: " + cloudsValue + "%");
          $('.vel-vento').text("Velocità vento: " + windSpeedValue + "m/s");

          $('#cityInput').val('');
      })
      .catch(err => alert("Città inesistente"));
}