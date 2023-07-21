function gameOver(parent) {
  const box = document.createElement("div");
  box.innerHTML = `<div id='main-Board3'>
  <buttom id="restart">Restart</buttom>
  </div>`;
  parent.appendChild(box);

  let restartButtom = document.getElementById("restart");

  restartButtom.addEventListener("click", function (e) {
    parent.removeChild(box);
  });
}

export { gameOver };
