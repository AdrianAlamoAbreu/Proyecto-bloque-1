function winner (parent) {
    const box = document.createElement("div");
    box.innerHTML = `<div id='main-Board4'>
    <h1>YOU WIN!!!! <br> CONGRATULATIONS</h1>
    <buttom id="restart">Restart</buttom>
    </div>`;
    parent.appendChild(box);
  
    let restartButtom = document.getElementById("restart");
  
    restartButtom.addEventListener("click", function (e) {
      parent.removeChild(box);
    });
  }
  
  export { winner };
  