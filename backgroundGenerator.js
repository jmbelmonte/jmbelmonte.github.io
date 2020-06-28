var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyBG =  document.getElementById("bodyHtml");

function changeBGColor() {
    bodyBG.style.background = "linear-gradient(to right, " + color1.value + ", " 
    + color2.value + ")";
}

color1.addEventListener("input", changeBGColor);
color2.addEventListener("input", changeBGColor);