// File: script.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

// This is for the etch n sketch app
// Variable to keep track of the number of steps
var count = 0;

// Initial position of the color selector
var selectorPosition = { x: 0.5, y: 0.5 };

// Function to select elements by ID
function getById(id) {
  return document.getElementById(id);
}

// Function called when the application starts
function OnStart() {
  // Create info container
  var infoContainer = document.createElement('div');
  infoContainer.id = 'infoContainer';
  document.body.appendChild(infoContainer);

  // Create color graph canvas
  var colorGraph = document.createElement('canvas');
  colorGraph.id = 'colorGraph';
  colorGraph.width = window.innerWidth;
  colorGraph.height = window.innerHeight;
  infoContainer.appendChild(colorGraph);

  // Call the function as if it's the cam_OnReady callback
  cam_OnReady();
}

// Function called when the camera is ready (simulated for canvas)
function cam_OnReady() {
  // Register event listener for arrow key movements
  document.addEventListener('keydown', handleKeyPress);

  // Periodically update the color graph
  setInterval(updateColorGraph, 0.01);
}

// Function to update color graph and move color selector
function updateColorGraph() {
  // Move the color selector within the canvas
  moveColorSelector();

  // Draw the color graph and color selector
  drawColorGraph();
}

// Function to move the color selector based on arrow key presses
function moveColorSelector() {
  const stepSize = 0.001;
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

// Object to store the state of arrow keys
var arrowKeys = { left: false, right: false, up: false, down: false };

// Function to handle arrow key press events
function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowLeft':
      arrowKeys.left = true;
      break;
    case 'ArrowRight':
      arrowKeys.right = true;
      break;
    case 'ArrowUp':
      arrowKeys.up = true;
      break;
    case 'ArrowDown':
      arrowKeys.down = true;
      break;
  }
}

// Function to handle arrow key release events
document.addEventListener('keyup', function (event) {
  switch (event.key) {
    case 'ArrowLeft':
      arrowKeys.left = false;
      break;
    case 'ArrowRight':
      arrowKeys.right = false;
      break;
    case 'ArrowUp':
      arrowKeys.up = false;
      break;
    case 'ArrowDown':
      arrowKeys.down = false;
      break;
  }
});

// Function to draw the color graph and color selector
function drawColorGraph() {
  var colorGraph = getById('colorGraph');
  var ctx = colorGraph.getContext('2d');

  // Clear the canvas
  ctx.clearRect(0, 0, colorGraph.width, colorGraph.height);

  // Draw color bars and labels
  drawColorBars(ctx);

  // Draw the color selector
  drawColorSelector(ctx);
}

// Function to draw color bars and labels
function drawColorBars(ctx) {
  var colors = [
    { hex: '#FFFFFF', label: 'Red' },
    { hex: '#FFFFFF', label: 'Green' },
    { hex: '#FFFFFF', label: 'Blue' },
    { hex: '#FFFFFF', label: 'Yellow' },
    { hex: '#FFFFFF', label: 'White' },
    { hex: '#FFFFFF', label: 'Yellow' },
    { hex: '#FFFFFF', label: 'Blue' },
    { hex: '#FFFFFF', label: 'Green' },
    { hex: '#FFFFFF', label: 'Red' },
    // Add more colors as needed
  ];

  var barWidth = colorGraph.width / colors.length;
  for (var i = 0; i < colors.length; i++) {
    var x = i * barWidth;
    ctx.fillStyle = colors[i].hex;
    ctx.fillRect(x, 0, barWidth, colorGraph.height);

    ctx.fillStyle = '#FFFFFF'; // White text
    ctx.font = '16px Arial';
    ctx.fillText(colors[i].label, x + 5, colorGraph.height - 5);
  }
}

// Array to store the history of color selector positions
var selectorHistory = [];

// Function to draw the color selector and its trail
function drawColorSelector(ctx) {
  var selectorX = selectorPosition.x * colorGraph.width;
  var selectorY = selectorPosition.y * colorGraph.height;

  // Save the current position to the history array
  selectorHistory.push({ x: selectorX, y: selectorY });

  ctx.fillStyle = '#000000'; // black color for selector
  ctx.beginPath();
  ctx.arc(selectorX, selectorY, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the trail or mark
  ctx.strokeStyle = '#000000'; // white color for the trail
  ctx.lineWidth = 5;
  ctx.beginPath();
  for (var i = 0; i < selectorHistory.length; i++) {
    ctx.lineTo(selectorHistory[i].x, selectorHistory[i].y);
  }
  ctx.stroke();
}
// This is for the etch n sketch

/*
> <!--Add a space to see better-->
*/


// This is to draw a cubic bezier
// Select the first 'i' element in the document
let elem = document.querySelector('i');

// Variable to store the start time of the animation
let start;

// Function to continuously debug and update the animation
function debug(timestamp) {
  // If start time is undefined, set it to the current timestamp
  if (start === undefined)
    start = timestamp;

  // Calculate the elapsed time since the animation started
  const elapsed = timestamp - start;

  // Get the position and size of the 'i' element
  let rect = elem.getBoundingClientRect();

  // Insert a 'd' element representing the debug point at the center of the 'i' element
  document.body.insertAdjacentHTML("beforeBegin",'<d style="top:'+(rect.y + rect.height/2)+'px;left:'+(rect.x + rect.width/2)+'px;"></d>');

  // Call debug function again to continue the animation
  window.requestAnimationFrame(debug);
}

// Add a click event listener to a button
document.querySelector("button").addEventListener("click",function() {
  // Add 'start' class to the 'i' element to trigger animation
  elem.classList.add("start");
  
  // Start the animation by calling the debug function
  window.requestAnimationFrame(debug);
});

// This is to draw a cubic bezier
