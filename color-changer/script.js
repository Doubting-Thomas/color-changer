"use strict";

const btnSolid = document.querySelector(".btn-solid");
const body = document.querySelector("body");
const heading = document.querySelector(".heading-secondary");
// Array of colors
const solidColor = ["red", "blue", "yellow", "aquamarine", "pink"];

function changeBackgroundColor() {
  const colorOptions = parseInt(Math.random() * solidColor.length);
  body.style.backgroundColor = solidColor[colorOptions];
  heading.textContent = `You picked the ${solidColor[colorOptions]} color!`;
}

btnSolid.addEventListener("click", changeBackgroundColor);
