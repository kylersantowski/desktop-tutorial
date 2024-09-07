let canvas, ctx;
let brushSize = 5;
let brushColor = '#000000';
let brushPosition = { x: 0, y: 0 };
let isDrawing = false;

// Initialize the canvas and set up event listeners
function OnStart() {
  // Create and set up the canvas
  canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');

  // Set the initial brush position to the center of the canvas
  brushPosition.x = canvas.width / 2;
  brushPosition.y = canvas.height / 2;

  // Focus the window to capture arrow key input
  window.focus();

  // Add keydown listener for arrow key drawing
  document.addEventListener('keydown', handleArrowKeys);

  // Optional: Add event listener for window resize
  window.addEventListener('resize', resizeCanvas);
}

// Handle arrow key movements and draw on the canvas
function handleArrowKeys(event) {
  const step = 10; // Step size for each arrow key press

  switch (event.key) {
    case 'ArrowUp':
      brushPosition.y = Math.max(brushPosition.y - step, 0); // Move up
      isDrawing = true;
      break;
    case 'ArrowDown':
      brushPosition.y = Math.min(brushPosition.y + step, canvas.height); // Move down
      isDrawing = true;
      break;
    case 'ArrowLeft':
      brushPosition.x = Math.max(brushPosition.x - step, 0); // Move left
      isDrawing = true;
      break;
    case 'ArrowRight':
      brushPosition.x = Math.min(brushPosition.x + step, canvas.width); // Move right
      isDrawing = true;
      break;
    default:
      isDrawing = false;
      break;
  }

  if (isDrawing) {
    drawOnCanvas();
  }
}

// Draw on the canvas at the current brush position
function drawOnCanvas() {
  ctx.fillStyle = brushColor;
  ctx.beginPath();
  ctx.arc(brushPosition.x, brushPosition.y, brushSize, 0, Math.PI * 2);
  ctx.fill();
}

// Resize the canvas to fit the window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Change the brush size
function setBrushSize(size) {
  brushSize = size;
}

// Change the brush color
function setBrushColor(color) {
  brushColor = color;
}

// Focus on the canvas and start drawing when the page loads
window.onload = OnStart;
