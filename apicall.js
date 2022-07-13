let weather = {
    "apiKey": "4aab44fe687ae582aa6aecce9392c370",
    getweather: function (location) { 
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + location 
            + "&units=imperial&appid=4aab44fe687ae582aa6aecce9392c370")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const{ icon, description } = data.weather[0];
        const{ temp, humidity } = data.main
        const{ speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " m/h";
    },
    search: function () {
      this.getweather(document.querySelector(".search-bar").value);
    } 
  };


    document
    .querySelector(".search button")
    .addEventListener("click", function (){weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event){
  if (event.key == "Enter"){
    weather.search();
  }
});