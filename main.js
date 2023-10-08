// Menu section 

document.querySelector("#open-nav-menu").addEventListener("click", function(){});

document.querySelector("#close-nav-menu").addEventListener("click", function(){});

// Greeting section

const greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "Helsinki";
let temperature = 22.8673;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)} °C outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;