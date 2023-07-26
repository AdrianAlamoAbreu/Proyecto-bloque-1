import { restart } from "./index.js";
import {
  obstacleTimer,
  collisionTimer,
  gameOverTimer,
  checkWinnerTimer,
  game,
  playSong
} from "./index.js";

let gameOverSong = new Audio('/music/Game_Over_sound_effect_64_kbps.mp3')

function gameOver(parent) {
  clearInterval(obstacleTimer);
  clearInterval(collisionTimer);
  clearInterval(gameOverTimer);
  clearInterval(checkWinnerTimer);

  gameOverSong.play()

  game.obstacles.forEach((obstacle) => clearInterval(obstacle.timerId));

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  const box = document.createElement("div");
  box.setAttribute("id", "main-Board3");
  box.innerHTML = `
  <button id="menu-btn"></button>
  `;

  parent.appendChild(box);
  playSong.pause()
  let restartButtom = document.getElementById("restart");

  restartButtom.addEventListener("click", function (e) {
    parent.removeChild(box);
    restart();
  });
}

export { gameOver };
