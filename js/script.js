window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  function handleKeyDown(e) {
    switch (e.key) {
      case "ArrowLeft":
        game.player.directionX = -5;
        break;
      case "ArrowRight":
        game.player.directionX = 5;
        break;
                }
  }

  function handleKeyUp(e) {
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowRight":
        game.player.directionX = 0;
        break;
    }
  }

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game();
    game.start();
  }
   restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }
};