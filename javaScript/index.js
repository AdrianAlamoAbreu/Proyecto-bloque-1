import { Player } from "./player.js";
import { Game } from "./game.js";
import { insertPage } from "./welcomePage.js";
import { gameOver } from "./gameOverPage.js";
import { winner } from "./winPage.js";
import { pause } from "./pausePage.js";

let mainBoard = document.getElementById("main-board");
let scoreBoard = document.getElementById("scoreBoard");

let player = new Player(200, 450, mainBoard);
let game = new Game(player);

let obstacleTimer;
let collisionTimer;
let gameOverTimer;
let checkWinnerTimer;

function start() {
  player.insertPlayer();

  obstacleTimer = setInterval(game.createObstacle, 5000);
  collisionTimer = setInterval(game.checkCollision, 100);

  gameOverTimer = setInterval(function () {
    if (Math.abs(incline) > 10 && player.sprite.offsetTop >= 445) {
      gameOver(mainBoard);
    }
  }, 100);
  checkWinnerTimer = setInterval(function () {
    if (score1 === 20 && player.sprite.offsetTop >= 445) {
      winner(mainBoard);
    }
  }, 2000);
}

function restart() {
  mainBoard.innerHTML = ` <span id="scoreBoard">Score:${score1}</span>
  <div id="land"></div>`;
  scoreBoard = document.getElementById("scoreBoard");
  score1 = 0;
  scoreBoard.innerText = `Score: ${score1}`;
  game.obstacles = [];
  player.y = 450;
  incline = 0;
  player.sprite.style.transform = `rotate(${incline}deg)`;
  start();
}

let incline = 0;

window.addEventListener("keydown", function (e) {
  if (player.sprite.offsetTop <= 350) {
    if (e.key === "a") {
      incline -= 10;
      player.sprite.style.transform = `rotate(${incline}deg)`;
    } else if (e.key === "d") {
      incline += 10;
      player.sprite.style.transform = `rotate(${incline}deg)`;
    }
    if (Math.abs(incline) === 360) {
      incline = 0;
      insertScore();
    }
    console.log(incline);
  }
  if (e.key === "p") {
    pause();
  }
});

window.addEventListener("keyup", function (e) {
  if (e.key === "a" || e.key === "d") {
    player.sprite.style.transform = `rotate(${incline}deg)`;
  }
});

let score1 = 0;

function insertScore() {
  score1 += 10;
  scoreBoard.innerText = `score: ${score1} `;
}

insertPage(mainBoard);

export { start, restart };
export { obstacleTimer, collisionTimer, gameOverTimer, checkWinnerTimer, game };
