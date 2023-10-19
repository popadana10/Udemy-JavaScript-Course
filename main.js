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
  const userLocation = "Helsinki";
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

  const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png",
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png",
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png",
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png",
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png",
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png",
    },
  ];
  
  const galleryImages = [
    {
      src: "./assets/gallery/image1.jpg",
      alt: "Thumbnail Image 1",
    },
    {
      src: "./assets/gallery/image2.jpg",
      alt: "Thumbnail Image 2",
    },
    {
      src: "./assets/gallery/image3.jpg",
      alt: "Thumbnail Image 3",
    },
  ];
  
  