import { Player } from "./player.js";
import { Obstacle } from "./obstacle.js";
import { Game } from "./game.js";

let mainBoard = document.getElementById("main-board");
let player = new Player(200, 750, mainBoard);
let game = new Game(player);

function start() {
  let obstacleTimer = setInterval(game.createObstacle, 10000);

  let collisionTimer = setInterval(game.checkCollision, 100);
}

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

player.insertPlayer();
start();