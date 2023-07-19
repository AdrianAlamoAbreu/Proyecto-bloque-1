import { Obstacle } from "./obstacle.js";
let mainBoard = document.getElementById("main-board");

function Game(player) {
  let self = this;
  this.obstacles = [];
  this.player = player;

  this.createObstacle = function () {
    let obstacle = new Obstacle(980, 750, mainBoard);
    obstacle.insertObstacle();
    self.obstacles.push(obstacle);
  };
  this.checkCollision = function () {
    self.obstacles.forEach((obstacle) => {
      if (self.player.x + self.player.width >= obstacle.x) {
        self.player.y -= 5;
        self.player.sprite.style.top = self.player.y + "px";
        
      } else {
      
      }
    });
  };



}

export { Game };
