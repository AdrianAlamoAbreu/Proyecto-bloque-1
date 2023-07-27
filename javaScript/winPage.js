import { restart } from "./index.js";
import {
  obstacleTimer,
  collisionTimer,
  gameOverTimer,
  checkWinnerTimer,
  game,
  playSong
} from "./index.js";

let winSong = new Audio('./music/Win_sound_effect_no_copyright_64_kbps.mp3')

function winner(parent) {
  clearInterval(obstacleTimer);
  clearInterval(collisionTimer);
  clearInterval(gameOverTimer);
  clearInterval(checkWinnerTimer);

  winSong.volume = 0.1;
  winSong.play()

  game.obstacles.forEach((obstacle) => clearInterval(obstacle.timerId));

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  const box = document.createElement("div");
  box.setAttribute("id", "main-Board4");
  box.innerHTML = `
  <button id="restart"></button>
  `;

  parent.appendChild(box);
  playSong.pause()
  let restartButtom = document.getElementById("restart");

  restartButtom.addEventListener("click", function (e) {
    parent.removeChild(box);
    restart();
  });
}

export { winner };
