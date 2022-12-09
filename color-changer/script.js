"use strict";

const btnSolid = document.querySelector(".btn-solid");
const btnHex = document.querySelector(".btn-hex");
const body = document.querySelector("body");
const heading = document.querySelector(".heading-secondary");
// Array of colors
const solidColors = ["red", "blue", "yellow", "aquamarine", "pink"];
const hexColors = ["#e81cff", "#ff930f", "#fff95b", "#696eff", "#ff8989"];

// Function for solid colors
function changeSolidColor() {
  const colorOptions = parseInt(Math.random() * solidColors.length);
  body.style.backgroundColor = solidColors[colorOptions];
  heading.textContent = `You picked the ${solidColors[colorOptions]} color!`;
}

// Function for hex colors
function changeHexColor() {
  const colorPicker = parseInt(Math.random() * hexColors.length);
  body.style.backgroundColor = hexColors[colorPicker];
  heading.textContent = `You picked a hex color - ${hexColors[colorPicker]}!`;
}

// Event listeners for swapping colors
btnSolid.addEventListener("click", changeSolidColor);
btnHex.addEventListener("click", changeHexColor);
