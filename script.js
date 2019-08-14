var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".rngbtn");

function randomHexCode () {
    var hexCode = "0123456789ABCDEF";
    var color = "#";
    while(color.length <= 6) {
        color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color;
}

function doRandomGradient() {
    color1.value = randomHexCode();
    color2.value = randomHexCode();
    setGradient();
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", doRandomGradient);
window.addEventListener("load", doRandomGradient);