import { Player } from "./player.js";
import { Obstacle } from "./obstacle.js";
import { Game } from "./game.js";
import { insertPage } from "./welcomePage.js";
import { gameOver } from "./gameOverPage.js";
import { winner } from "./winPage.js";

let mainBoard = document.getElementById("main-board");
let scoreBoard = document.getElementById("scoreBoard");
let player = new Player(200, 650, mainBoard);
let game = new Game(player);
let deleteObstacle = document.getElementsByClassName("obstacle")

// menuButton.addEventListener('click', function () {
//   menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
//   start()
// });

function start() {
  insertPage(mainBoard);
  let obstacleTimer = setInterval(game.createObstacle, 10000);
  let collisionTimer = setInterval(game.checkCollision, 100);
  let gameOverTimer = setInterval(function () {
    if (Math.abs(incline) > 10 && player.sprite.offsetTop >= 645) {
      gameOver(mainBoard);
    }
  }, 100);
  let checkWinnerTimer = setInterval(function () {
    if (score1 === 10 && player.sprite.offsetTop >= 645) {
      winner(mainBoard);
    }
  }, 2000);
}

let incline = 0;

window.addEventListener("keydown", function (e) {
  if (player.sprite.offsetTop <= 600) {
    if (e.key === "a") {
      incline -= 5;
      player.sprite.style.transform = `rotate(${incline}deg)`;
    } else if (e.key === "d") {
      incline += 5;
      player.sprite.style.transform = `rotate(${incline}deg)`;
    }
    if (Math.abs(incline) === 360) {
      incline = 0;
      insertScore();
    }
  }
  console.log(player.sprite.offsetTop);
});

window.addEventListener("keyup", function (e) {
  if (e.key === "a" || e.key === "d") {
    player.sprite.style.transform = `rotate(${incline}deg)`;
  }
});

let score1 = 0;

function insertScore() {
  score1 += 10;
  scoreBoard.innerText = ` ${score1} `;
}

player.insertPlayer();
start();
