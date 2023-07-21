function gameOver(parent) {
  const box = document.createElement("div");
  box.innerHTML = `<div id='main-Board3'>
  <h1 class='title'>GAME<br>OVER</h1>
  <buttom id="restart">Restart</buttom>
  </div>`;
  parent.appendChild(box);

  let restartButtom = document.getElementById("restart");

  restartButtom.addEventListener("click", function (e) {
    parent.removeChild(box);
  });
}

export { gameOver };
