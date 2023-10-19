

// Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
  });
  document
    .querySelector("#close-nav-menu")
    .addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });

  
  // Greeting Section
  
  function celsiusToFahr(temperature) {
    console.log(temperature);
  }
  celsiusToFahr(25);
  celsiusToFahr(30);
  
  function celsiusToFahr(temperature) {
    let fahr = (temperature * 9) / 5 + 32;
    return fahr;
  }
  
  celsiusToFahr(25);
  celsiusToFahr(30);
  
  let currentHour = new Date().getHours();
  let greetingText;
  
  if (currentHour < 12) {
    greetingText = "Good morning!";
  } else if (currentHour < 19) {
    greetingText = "Good afternoon!";
  } else if (currentHour < 24) {
    greetingText = "Good evening!";
  } else {
    greetingText = "Welcome!";
  }
  
  const weatherCondition = "cloudy";
  const userLocation = "New York";
  let temperature = 22.8673;
  let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(
    1
  )}C outside.`;
  let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(
    temperature
  ).toFixed(1)}F outside.`;
  
  document.querySelector("#greeting").innerHTML = greetingText;
  document.querySelector("p#weather").innerHTML = celsiusText;
  
  document
    .querySelector(".weather-group")
    .addEventListener("click", function (e) {
      if (e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
      } else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText;
      }
    });
  

  
  let localTime = new Date();
  
  document.querySelector("span[data-time=hours").textContent =
    localTime.getHours();
  document.querySelector("span[data-time=minutes").textContent =
    localTime.getMinutes();
  document.querySelector("span[data-time=seconds").textContent =
    localTime.getSeconds();
  
  console.log("outside the timeout");
  setInterval(function () {
    let localTime = new Date();
    document.querySelector("span[data-time=hours").textContent = localTime
      .getHours()
      .toString()
      .padStart(2, "0");
    document.querySelector("span[data-time=minutes").textContent = localTime
      .getMinutes()
      .toString()
      .padStart(2, "0");
    document.querySelector("span[data-time=seconds").textContent = localTime
      .getSeconds()
      .toString()
      .padStart(2, "0");
  }, 1000);
  
  