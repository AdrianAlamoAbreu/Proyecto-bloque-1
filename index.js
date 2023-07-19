import { Player } from "./player.js";
import { Obstacle } from "./obstacle.js";
import { Game } from "./game.js";

let mainBoard = document.getElementById("main-board");
let scoreBoard = document.getElementById("scoreBoard");
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
  if(Math.abs(incline) === 360) {
    incline = 0
    insertScore()
  } 
  console.log(incline)
});

window.addEventListener("keyup", function (e) {
  if (e.key === "a" || e.key === "d") {
    player.sprite.style.transform = `rotate(${incline}deg)`;
  }
});

let score1 = 0

function insertScore (){
  // if(incline === 360) {
    score1 += 10
    console.log(score1)
    scoreBoard.innerText = ` ${score1} `
    
    
  // }
}




// let scoreId = setInterval(insertScore, 100)
player.insertPlayer();
start();
