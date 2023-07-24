import { Player } from "./player.js";
import { Game } from "./game.js";
import { insertPage, winner } from "./welcomePage.js";

let mainBoard = document.getElementById("main-board");
let scoreBoard = document.getElementById("scoreBoard");
let player = new Player(200, 650, mainBoard);
let game = new Game(player);
let obstacleTimer
let collisionTimer
let gameOverTimer
let checkWinnerTimer


function welcomePage() {
  insertPage(mainBoard);
}

function gameOver() {
  clearInterval(obstacleTimer);
  clearInterval(collisionTimer);
  clearInterval(gameOverTimer);
  clearInterval(checkWinnerTimer);
  let obstacleNew = document.querySelectorAll('.obstacle')
  console.log(obstacleNew)
  
  while (mainBoard.firstChild) { mainBoard.removeChild(mainBoard.firstChild);}
  obstacleNew.forEach((obstacle) => clearInterval(obstacle.timerId))
  const box = document.createElement("div");
  box.setAttribute('id', 'main-Board3')
  box.innerHTML = `
  <button id="restart">Restart</button>
  `;

  mainBoard.appendChild(box);
  
  let restartButtom = document.getElementById("restart");

  restartButtom.addEventListener("click", function (e) {
   mainBoard.removeChild(box);
    restart();
   
  });
}

function restart() {
  
  mainBoard.innerHTML = ` <span id="scoreBoard">Score:${score1}</span>
  <div id="land"></div>`
  score1 = 0;
  scoreBoard.innerText = `score: ${score1}`;
  game.obstacles = []
  player.y = 650
  incline = 0;
  player.sprite.style.transform = `rotate(${incline}deg)`;
  start()
  
}

function start() {
  
  player.insertPlayer();
  obstacleTimer = setInterval(game.createObstacle, 5000);

  collisionTimer = setInterval(game.checkCollision, 100);
  
  gameOverTimer = setInterval(function () {
    if (Math.abs(incline) > 10 && player.sprite.offsetTop >= 645) {
      gameOver(mainBoard);
    }
  }, 100);
  checkWinnerTimer = setInterval(function () {
    if (score1 === 20 && player.sprite.offsetTop >= 645) {
      winner(mainBoard);
    }
  }, 2000);
}

function pause() {

  clearInterval(obstacleTimer);
  clearInterval(collisionTimer);
  clearInterval(gameOverTimer);
  clearInterval(checkWinnerTimer);
  let obstacleNew = document.querySelectorAll('.obstacle')
  
  while (mainBoard.firstChild) { mainBoard.removeChild(mainBoard.firstChild);}
  obstacleNew.forEach((obstacle) => clearInterval(obstacle.timerId))
  const box = document.createElement("div");
  box.setAttribute('id', 'main-Board5')
  box.innerHTML = `
  <button id="restart"></button>
  `;
  mainBoard.appendChild(box);

  let restartButtom = document.getElementById("restart");

  restartButtom.addEventListener("click", function (e) {
    mainBoard.removeChild(box);
    mainBoard.innerHTML = ` <span id="scoreBoard">Score:${score1}</span>
    <div id="land"></div> `
  
  player.sprite.style.transform = `rotate(${incline}deg)`;
  start()
  });
}

let incline = 0;

window.addEventListener("keydown", function (e) {
  if (player.sprite.offsetTop <= 550) {
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
  if (e.key === 'p') {
    pause()
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

welcomePage();

export { start, restart};
//export { globalTimer };
