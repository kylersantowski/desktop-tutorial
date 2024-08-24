// Initialize the canvas and context
let canvas, ctx;
let isDrawing = false;
let brushSize = 5;
let brushColor = '#000000';

// Function to initialize the canvas and set up event listeners
function OnStart() {
  canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');

  // Event listeners for drawing
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  // Optional: Add event listener for window resize
  window.addEventListener('resize', resizeCanvas);
}

// Start drawing on the canvas
function startDrawing(event) {
  isDrawing = true;
  draw(event); // Start drawing immediately
}

// Draw on the canvas
function draw(event) {
  if (!isDrawing) return;

  ctx.lineWidth = brushSize;
  ctx.lineCap = 'round';
  ctx.strokeStyle = brushColor;

  ctx.beginPath();
  ctx.moveTo(event.clientX, event.clientY);
  ctx.lineTo(event.clientX, event.clientY);
  ctx.stroke();
}

// Stop drawing
function stopDrawing() {
  isDrawing = false;
  ctx.beginPath();
}

// Resize canvas to fit window
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

// Call OnStart when the window loads
window.onload = OnStart;
