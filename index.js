import { Player } from "./player.js";
import { Obstacle } from "./obstacle.js";

let mainBoard = document.getElementById("main-board");
console.log(mainBoard);
let player = new Player(200, 750, mainBoard);

function start() {
  let obstacleTimer = setInterval(createObstacle, 10000);
}

function createObstacle(mainBoard) {
  let obstacle = new Obstacle(980, 750, mainBoard);
  obstacle.insertObstacle();
}

player.insertPlayer();

let incline = 0;

window.addEventListener("keydown", function (e) {
  if (e.key === "a") {
    incline -= 5;
    player.sprite.style.transform = `rotate(${incline}deg)`;
  } else if (e.key === "d") {
    incline += 5;
    player.sprite.style.transform = `rotate(${incline}deg)`;
  }
});

window.addEventListener("keyup", function (e) {
  if (e.key === "a" || e.key === "d") {
    player.sprite.style.transform = `rotate(${incline}deg)`;
  }
});

start();
