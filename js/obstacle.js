class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.top = 0;
    this.width = 100;
    this.height = 150;

    const roadLeft = 70; // отступ слева от дороги
    const roadWidth = 360; // ширина дороги
    const maxLeft = roadLeft + roadWidth - this.width;
    this.left = Math.floor(Math.random() * (maxLeft - roadLeft) + roadLeft);

    this.element = document.createElement("img");
    this.element.src = "./images/redCar.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.top += 5;
    this.updatePosition();
  }
}