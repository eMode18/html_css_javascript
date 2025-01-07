import Controller from "./js/contoller.js";

const selectCellsNumber = document.querySelector("#select-cells-number");

const game = new Controller(selectCellsNumber);

selectCellsNumber.addEventListener("change", (e) => {
  document.querySelector(".playground").innerHTML = "";

  const newGame = new Controller(e.target.value);
});
