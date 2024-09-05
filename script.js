// File: script.js

// Arithmetic Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// Etch-a-Sketch Functionality

// Variable to keep track of the number of steps (if needed)
let count = 0;

// Initial position of the color selector
let selectorPosition = { x: 0.5, y: 0.5 };

// Object to store the state of arrow keys
let arrowKeys = { left: false, right: false, up: false, down: false };

// Array to store the history of color selector positions
let selectorHistory = [];

// Select elements by ID
function getById(id) {
  return document.getElementById(id);
}

// Start the application
function OnStart() {
  // Create the info container and canvas
  const infoContainer = document.createElement('div');
  infoContainer.id = 'infoContainer';
  document.body.appendChild(infoContainer);

  const colorGraph = document.createElement('canvas');
  colorGraph.id = 'colorGraph';
  colorGraph.width = window.innerWidth;
  colorGraph.height = window.innerHeight;
  infoContainer.appendChild(colorGraph);

  // Simulate the camera readiness
  cam_OnReady();
}

// When camera (canvas) is ready
function cam_OnReady() {
  // Register key event listeners
  document.addEventListener('keydown', handleKeyPress);
  document.addEventListener('keyup', handleKeyRelease);

  // Use requestAnimationFrame for smooth updates
  window.requestAnimationFrame(updateColorGraph);
}

// Update the color graph and move the color selector
function updateColorGraph() {
  moveColorSelector();  // Handle movements
  drawColorGraph();     // Redraw the canvas
  window.requestAnimationFrame(updateColorGraph); // Continue updating
}

// Move the color selector based on arrow key presses
function moveColorSelector() {
  const stepSize = 0.001;  // Adjust movement speed
  if (arrowKeys.left && selectorPosition.x > 0) {
    selectorPosition.x -= stepSize;
  }
  if (arrowKeys.right && selectorPosition.x < 1) {
    selectorPosition.x += stepSize;
  }
  if (arrowKeys.up && selectorPosition.y > 0) {
    selectorPosition.y -= stepSize;
  }
  if (arrowKeys.down && selectorPosition.y < 1) {
    selectorPosition.y += stepSize;
  }
}

// Handle key press events
function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowLeft': arrowKeys.left = true; break;
    case 'ArrowRight': arrowKeys.right = true; break;
    case 'ArrowUp': arrowKeys.up = true; break;
    case 'ArrowDown': arrowKeys.down = true; break;
  }
}

// Handle key release events
function handleKeyRelease(event) {
  switch (event.key) {
    case 'ArrowLeft': arrowKeys.left = false; break;
    case 'ArrowRight': arrowKeys.right = false; break;
    case 'ArrowUp': arrowKeys.up = false; break;
    case 'ArrowDown': arrowKeys.down = false; break;
  }
}

// Draw the color graph and selector
function drawColorGraph() {
  const colorGraph = getById('colorGraph');
  const ctx = colorGraph.getContext('2d');

  // Clear canvas before each draw
  ctx.clearRect(0, 0, colorGraph.width, colorGraph.height);

  // Draw color bars and selector
  drawColorBars(ctx);
  drawColorSelector(ctx);
}

// Draw color bars and labels
function drawColorBars(ctx) {
  const colors = [
    { hex: '#FF0000', label: 'Red' },
    { hex: '#00FF00', label: 'Green' },
    { hex: '#0000FF', label: 'Blue' },
    { hex: '#FFFF00', label: 'Yellow' },
    { hex: '#FFFFFF', label: 'White' },
  ];

  const barWidth = colorGraph.width / colors.length;

  // Draw each color bar
  colors.forEach((color, i) => {
    const x = i * barWidth;
    ctx.fillStyle = color.hex;
    ctx.fillRect(x, 0, barWidth, colorGraph.height);

    // Draw labels
    ctx.fillStyle = '#FFFFFF';  // Text color
    ctx.font = '16px Arial';
    ctx.fillText(color.label, x + 5, colorGraph.height - 5);
  });
}

// Draw the color selector and trail
function drawColorSelector(ctx) {
  const colorGraph = getById('colorGraph');
  const selectorX = selectorPosition.x * colorGraph.width;
  const selectorY = selectorPosition.y * colorGraph.height;

  // Save the current position to the history
  selectorHistory.push({ x: selectorX, y: selectorY });

  // Draw the selector
  ctx.fillStyle = '#000000';  // Black for the selector
  ctx.beginPath();
  ctx.arc(selectorX, selectorY, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the trail (path)
  ctx.strokeStyle = '#000000';  // Black for the trail
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < selectorHistory.length; i++) {
    ctx.lineTo(selectorHistory[i].x, selectorHistory[i].y);
  }
  ctx.stroke();
}

// Animation and Cubic Bezier Debug

let elem = document.querySelector('i');  // Select the first 'i' element
let start;  // Variable to store the start time of animation

// Debug animation and cubic bezier curve
function debug(timestamp) {
  if (!start) start = timestamp;
  const elapsed = timestamp - start;

  const rect = elem.getBoundingClientRect();
  document.body.insertAdjacentHTML(
    "beforeBegin",
    `<d style="top:${rect.y + rect.height / 2}px; left:${rect.x + rect.width / 2}px;"></d>`
  );

  window.requestAnimationFrame(debug);  // Continue the animation
}

// Add click listener to button for animation start
document.querySelector("button").addEventListener("click", function() {
  elem.classList.add("start");
  window.requestAnimationFrame(debug);  // Start the animation
});

// Theme Switching Functionality

function switchTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme');

  if (theme === '1') {
    document.body.classList.add('light-theme');
  } else if (theme === '2') {
    document.body.classList.add('dark-theme');
  } else if (theme === '3') {
    document.body.classList.add('blue-theme');
  }
}

// Event listener for theme toggle (slider)
getById('theme-toggle').addEventListener('input', function () {
  switchTheme(this.value);
});

// Initialize with the default light theme
switchTheme('1');
