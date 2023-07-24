import { start, restart } from "./index.js";
// import { globalTimer } from "./index.js";

function insertPage(parent) {
  const container = document.createElement("div");
  container.innerHTML = `<div id='main-Board2'>
  <h1 class='title'>Super.realistic <br> Motocross Game</h1>
  <buttom id="menu-btn"></buttom>
  </div>`;
  parent.appendChild(container);

  let menuButtom = document.getElementById("menu-btn");

  menuButtom.addEventListener("click", function () {
    parent.removeChild(container);
    start();
  });
}

function winner(parent) {
 
  const box = document.createElement("div");
  box.innerHTML = `<div id='main-Board4'>
  <h1>YOU WIN!!!! <br> CONGRATULATIONS</h1>
  <buttom id="restart">Restart</buttom>
  </div>`;
  parent.appendChild(box);

  let restartButtom = document.getElementById("restart");

  restartButtom.addEventListener("click", function (e) {
    parent.removeChild(box);
    restart();
  });
}



export {insertPage, winner };
