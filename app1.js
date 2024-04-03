const gameImage = document.querySelector(".one");

document.getElementById('up').addEventListener('click', function() {
  moveImage(0, -10);
});

document.getElementById('down').addEventListener('click', function() {
  moveImage(0, 10);
});

document.getElementById('left').addEventListener('click', function() {
  moveImage(-10, 0);
});

document.getElementById('right').addEventListener('click', function() {
  moveImage(10, 0);
});

function moveImage(x, y) {
  const currentX = parseInt(gameImage.style.left || 0);
  const currentY = parseInt(gameImage.style.top || 0);
  const newX = currentX + x;
  const newY = currentY + y;

  // Get window dimensions
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Get image dimensions
  const imageWidth = gameImage.offsetWidth;
  const imageHeight = gameImage.offsetHeight;

  // Calculate boundaries
  const maxX = windowWidth - imageWidth;
  const maxY = windowHeight - imageHeight;

  // Check if the new position exceeds screen boundaries
  if (newX >= 0 && newX <= maxX) {
    gameImage.style.left = `${newX}px`;
  }

  if (newY >= 0 && newY <= maxY) {
    gameImage.style.top = `${newY}px`;
  }
}