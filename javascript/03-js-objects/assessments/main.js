import { Ball } from "./modules/ball.js";
import { EvilCircle } from "./modules/evil-circle.js";
import { Counter } from "./modules/counter.js";
import { random, randomRGB } from "./modules/util.js";

// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const para = document.querySelector('p');
const counter = new Counter();

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
  counter.increment();
}

para.textContent = counter.toString();

const size = random(10, 20);
const evilCircle = new EvilCircle(
  random(0 + size, width - size), 
  random(0 + size, height - size));

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    if (ball.exists) {
      ball.draw(ctx);
      ball.update(width, height);
      ball.collisionDetect(balls);
    }

    evilCircle.draw(ctx);
    evilCircle.checkBounds(width, height);
    evilCircle.collisionDetect(balls, counter);
  }
  
  para.textContent = counter.toString();
  requestAnimationFrame(loop);
}

loop();
