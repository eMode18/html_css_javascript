class Elements {
  constructor(cardsNumber) {
    this.cardsNumber = cardsNumber;
    this.playground = document.querySelector(".playground");
    this.cardsIndex = [];
    this.createCard();
  }

  createCard() {
    this.playground.style.gridTemplateRows = `repeat(${Math.sqrt(
      this.cardsNumber
    )}, 1fr)`;
    this.playground.style.gridTemplateColumns = `repeat(${Math.sqrt(
      this.cardsNumber
    )}, 1fr)`;
  }
}

export default Elements;
