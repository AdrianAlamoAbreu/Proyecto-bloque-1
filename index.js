import { Player } from "./player.js";
import { Obstacle } from "./obstacle.js";

let mainBoard = document.getElementById("main-board");
let player = new Player(200, 750, mainBoard);

function start() {
  let obstacleTimer = setInterval(createObstacle, 10000);
}

function createObstacle() {
  let obstacle = new Obstacle(980, 750, mainBoard);
  obstacle.insertObstacle();
}

player.insertPlayer();

window.addEventListener("keydown", function (e) {
  if (e.key === "a") {
    player.sprite.classList.add("backflipA");
  } else if (e.key === "d") {
    player.sprite.classList.add("backflipD");
  } else if (e.key === "w") {
    player.sprite.classList.add("matrix");
  } else if (e.key === "q") {
    player.sprite.classList.add("jump");
  } else if (e.key === "Shift") {
    player.sprite.classList.add("wheelie");
  }
});

window.addEventListener("keyup", function (e) {
  if (e.key === "a") {
    player.sprite.classList.remove("backflipA");
  } else if (e.key === "d") {
    player.sprite.classList.remove("backflipD");
  } else if (e.key === "w") {
    player.sprite.classList.remove("matrix");
  } else if (e.key === "q") {
    player.sprite.classList.remove("jump");
  } else if (e.key === "Shift") {
    player.sprite.classList.remove("wheelie");
  }
});

start();
