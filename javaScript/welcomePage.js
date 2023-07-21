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
  });
}

export { insertPage };
