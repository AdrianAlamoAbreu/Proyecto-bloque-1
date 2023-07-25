import { Obstacle } from "./obstacle.js";
let mainBoard = document.getElementById('main-board');

function Game (player) {
    this.obstacles =[]
    let self = this;
    this.player = player;

    this.createObstacle = function () {
        let obstacle = new Obstacle (980, 450, mainBoard, self.obstacles)
        obstacle.insertObstacle()
        self.obstacles.push(obstacle)
    }
    this.checkCollision= function() {
       self.obstacles.forEach(obstacle => {
        if (self.player.x + self.player.width >= obstacle.x && self.player.x < obstacle.x + obstacle.width + 20
           ) {
            self.player.y -= 23;
            self.player.sprite.style.top = self.player.y +'px' 
        } else if (self.player.y <= 400) {
            self.player.y += 21;
            self.player.sprite.style.top = self.player.y +'px' 
        } 
    }
       )};
       
      
}

export{Game}
