function insertPage(parent, fn) {
  const container = document.createElement("div");
  container.innerHTML = `<div id='main-Board2'>
  <h1 class='title'>Super.realistic <br> Motocross Game</h1>
  <buttom id="menu-btn">Start</buttom>
  </div>`;
  parent.appendChild(container);

  let menuButton = document.getElementById("menu-btn");

  menuButton.addEventListener("click", function (e) {
    parent.removeChild(container);
  });
}

export { insertPage };


