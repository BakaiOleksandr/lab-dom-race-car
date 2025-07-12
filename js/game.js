class Game {
    constructor(startScreen,gameScreen,gameEndScreen,player,
        height,width,obstacles,score,lives,gameIsOver,gameIntervalId,gameLoopFrecuency){
    this.startScreen = document.getElementById('game-intro');
    this.gameScreen = document.getElementById('game-screen');
    this.gameEndScreen = document.getElementById('game-end');
    this.player = null;
    this.player = new Player(this.gameScreen,122,500,100,150,'./images/car.png',{top: 10,  left: 50,  right: 100,  bottom: 10});
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrecuency = 1000/60;
    }

    //METHODS..............
    start(){
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';

        this.gameIntervalId = setInterval(() => this.gameLoop(), this.gameLoopFrecuency);
    }

    gameLoop(){
        this.update();
        if(this.gameIsOver){
            clearInterval(this.gameIntervalId);
        }
    }
    updateScoreDisplay() {
  document.getElementById("score").textContent = "Score: " + this.score;
}

updateLivesDisplay() {
  document.getElementById("lives").textContent = "Lives: " + this.lives;
}
    update() {
  this.player.move();

  for (let i = 0; i < this.obstacles.length; i++) {
    const obstacle = this.obstacles[i];
    obstacle.move();

    //Collision
    if (this.player.didCollide(obstacle)) {
      obstacle.element.remove();
      this.obstacles.splice(i, 1);
      i--;

      this.lives--;
      

      if (this.lives <= 0) {
        this.endGame();
        return;
      }

      // new obstacle after collision
      const newObstacle = new Obstacle(this.gameScreen);
      this.obstacles.push(newObstacle);
      continue; // пропускаем следующую проверку
    }

    // obstacle goes beyond
    if (obstacle.top > this.gameScreen.offsetHeight) {
      obstacle.element.remove();
      this.obstacles.splice(i, 1);
      i--;

      this.score++;
      

      const newObstacle = new Obstacle(this.gameScreen);
      this.obstacles.push(newObstacle);
    }
    this.updateScoreDisplay();
this.updateLivesDisplay();
  }

  // Создаём первое препятствие, если список пуст
  if (this.obstacles.length === 0) {
    const newObstacle = new Obstacle(this.gameScreen);
    this.obstacles.push(newObstacle);
  }
}

    endGame() {
  this.gameIsOver = true;
  this.gameScreen.style.display = "none";
  this.gameEndScreen.style.display = "block";

  console.log("🛑 Game Over");
}

}