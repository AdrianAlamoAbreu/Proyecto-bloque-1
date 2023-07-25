import { start } from "./index.js";
import {
  obstacleTimer,
  collisionTimer,
  gameOverTimer,
  checkWinnerTimer,
  game,
} from "./index.js";

function pause(parent) {
  clearInterval(obstacleTimer);
  clearInterval(collisionTimer);
  clearInterval(gameOverTimer);
  clearInterval(checkWinnerTimer);

  
  game.obstacles.forEach((obstacle) => clearInterval(obstacle.timerId));

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  const box = document.createElement("div");
  box.setAttribute("id", "main-Board5");
  box.innerHTML = `
  <button id="restart"></button>
  `;
  parent.appendChild(box);

  let restartButtom = document.getElementById("restart");

  restartButtom.addEventListener("click", function (e) {
    parent.removeChild(box);
    parent.innerHTML = ` <span id="scoreBoard">Score:${score1}</span>
    <div id="land"></div> `;

    player.sprite.style.transform = `rotate(${incline}deg)`;
    start();
  });
}

export { pause }