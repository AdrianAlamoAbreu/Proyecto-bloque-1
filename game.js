import { Obstacle } from "./obstacle.js";
let mainBoard = document.getElementById('main-board');

function Game (player) {
    this.obstacles =[]
    let self = this;
    this.player = player;

    this.createObstacle = function () {
        let obstacle = new Obstacle (980, 750, mainBoard, self.obstacles)
        obstacle.insertObstacle()
        self.obstacles.push(obstacle)
    }
    this.checkCollision= function() {
       self.obstacles.forEach(obstacle => {
        if (self.player.x + self.player.width >= obstacle.x && self.player.x < obstacle.x + obstacle.width + 10
           ) {
            self.player.y -= 7;
            self.player.sprite.style.top = self.player.y +'px' 
        } else if (self.player.y <= 745) {
            self.player.y +=7;
            self.player.sprite.style.top = self.player.y +'px' 
        }
    }
       )};
      
}

export{Game}
