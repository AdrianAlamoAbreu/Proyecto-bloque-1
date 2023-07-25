import { restart } from "./index.js";
import {
  obstacleTimer,
  collisionTimer,
  gameOverTimer,
  checkWinnerTimer,
  game,
} from "./index.js";

function winner(parent) {
  clearInterval(obstacleTimer);
  clearInterval(collisionTimer);
  clearInterval(gameOverTimer);
  clearInterval(checkWinnerTimer);

  game.obstacles.forEach((obstacle) => clearInterval(obstacle.timerId));

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  const box = document.createElement("div");
  box.setAttribute("id", "main-Board4");
  box.innerHTML = `
  <buttom id="restart"></buttom>
  `;

  parent.appendChild(box);

  let restartButtom = document.getElementById("restart");

  restartButtom.addEventListener("click", function (e) {
    parent.removeChild(box);
    restart();
  });
}

export { winner };
