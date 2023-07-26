import { start } from "./index.js";

function insertPage(parent) {
  const container = document.createElement("div");
  container.innerHTML = `<div id='main-Board2'>
  <h1 class='title'></h1>
  <button id="menu-btn"></button>
  </div>`;
  parent.appendChild(container);

  let menuButtom = document.getElementById("menu-btn");

  menuButtom.addEventListener("click", function () {
    parent.removeChild(container);
    start();
  });
}

export { insertPage };
