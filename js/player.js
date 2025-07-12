class Player{
    constructor(gameScreen,left,top,width,
        height,imgSrc,borders = {top: 10, left: 10, right: 10, bottom: 10}){

    this.gameScreen=gameScreen;
    this.left=left;
    this.top=top;
    this.width=width;
    this.height=height;
    this.directionY = 0;//horizontal move
    this.directionX = 0;

    this.element = document.createElement('img');
    this.element.src = imgSrc;
    this.element.style.position = 'absolute';
    this.element.style.width = `${this.width}`;
    this.element.style.height = `${this.height}`;
    this.element.style.left = `${this.left}`;
    this.borders = borders;

    this.gameScreen.appendChild(this.element);

    }
    
   move() {
  this.left += this.directionX;

  // top
  if (this.top < this.borders.top) {
    this.top = this.borders.top;
  }

  // left
  if (this.left < this.borders.left) {
    this.left = this.borders.left;
  }

  // right
  if (this.left + this.width > this.gameScreen.offsetWidth - this.borders.right) {
    this.left = this.gameScreen.offsetWidth - this.width - this.borders.right;
  }

  // bottom
  if (this.top + this.height > this.gameScreen.offsetHeight - this.borders.bottom) {
    this.top = this.gameScreen.offsetHeight - this.height - this.borders.bottom;
  }

  this.updatePosition();
}

    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

    };
    didCollide(obstacle){
        const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  
    };

}