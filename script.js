// let weather = {
//   apiKey: "ec96ea820661ff4701e05949bbdfe7c5",
//   fetchWeather: function (city) {
//      fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//       city +
//       "&units=metric&appid=" +
//       this.apiKey
//     )
//       .then((response) => {
//         if (!response.ok) {
//           // copied
//           if (city.toLowerCase() === "itahar") {
//             const raiganjResponse = await fetch(
//               "https://api.openweathermap.org/data/2.5/weather?q=Raiganj&units=metric&appid=" +
//               this.apiKey
//             );
//             if (raiganjResponse.ok) {
//               const raiganjData = await raiganjResponse.json();
//               this.displayWeather(raiganjData);
//             } else {
//               throw new Error("No weather data found for Itahar or Raiganj.");
//             }
//           } else {
//             throw new Error("No weather found for " + city);
//           }
//           // copied ends
//           alert("No weather found.");
//           throw new Error("No weather found.");
//         }
//         return response.json();

//         // another logic

//           // logic ends
//         })
//       .then((data) => this.displayWeather(data));
//   },
//   displayWeather: function (data) {
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { temp, humidity } = data.main;
//     const { speed } = data.wind;
//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".icon").src =
//       "https://openweathermap.org/img/wn/" + icon + ".png";
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".temp").innerText = temp + "°C";
//     document.querySelector(".humidity").innerText =
//       "Humidity: " + humidity + "%";
//     document.querySelector(".wind").innerText =
//       "Wind speed: " + speed + " km/h";
//     document.querySelector(".weather").classList.remove("loading");
//     document.body.style.backgroundImage =
//       "url('https://source.unsplash.com/1600x900/?" + name + "')";
//   },
//   search: function () {
//     this.fetchWeather(document.querySelector(".search-bar").value);
//   },
// };

// document.querySelector(".search button").addEventListener("click", function () {
//   weather.search();
// });

// document
//   .querySelector(".search-bar")
//   .addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//       weather.search();
//     }
//   });

// weather.fetchWeather("Jalpaiguri");


// copied fixed code here================
// have to add displayWeather function
let weather = {
  apiKey: "ec96ea820661ff4701e05949bbdfe7c5",
  fetchWeather: function (city) {
      let actualCity = city;
      if (city.toLowerCase() === "itahar") {
          actualCity = "Raiganj"; 
      }
      if (city.toLowerCase() === "itahar government polytechnic") {
        actualCity = "Raiganj"
    }

      fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          actualCity +
          "&units=metric&appid=" +
          this.apiKey
      )
          .then((response) => {
              if (!response.ok) {
                  alert("No weather found.");
                  throw new Error("No weather found.");
              }
              return response.json();
          })
          .then((data) => this.displayWeather(data, city)); // Pass both actual city and input city
  },
  displayWeather: function (data, city) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + city; // Display input city
      document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
          "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
    //   document.body.style.backgroundImage =
    //       "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
          weather.search();
      }
  });

weather.fetchWeather("Kolkata");