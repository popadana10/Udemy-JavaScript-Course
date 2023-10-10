// Menu section 

document.querySelector("#open-nav-menu").addEventListener("click", function(){});

document.querySelector("#close-nav-menu").addEventListener("click", function(){});

// Greeting section

function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32; 
    return fahr;
}
celsiusToFahr(25);
celsiusToFahr(27);

const greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "Helsinki";
let temperature = 25;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)} °F outside.`;

alert("The temperature outside is" + celsiusToFahr(temperature) + "°F");

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;

