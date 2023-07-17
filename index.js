import { Player } from "./player.js";
import { Obstacle } from "./obstacle.js";

let mainBoard = document.getElementById('main-board')
let player = new Player (200, 750, mainBoard) 

function start () {
    let obstacleTimer = setInterval (createObstacle, 10000)

}

function createObstacle () {
    let obstacle = new Obstacle (980, 750, mainBoard)
    obstacle.insertObstacle()
}

player.insertPlayer()
start ()