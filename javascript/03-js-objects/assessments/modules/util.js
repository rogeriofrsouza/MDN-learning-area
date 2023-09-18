// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

export { random, randomRGB };
