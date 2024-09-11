const canvas = document.getElementById('fractalCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
let time = 0;

function mandelbrotSet(x, y) {
  const maxIter = 50;
  let r = x;
  let i = y;
  for (let a = 0; a < maxIter; a++) {
    const tmpr = r * r - i * i + x;
    const tmpi = 2 * r * i + y;
    r = tmpr;
    i = tmpi;
    if (r * i > 5) return (a / maxIter) * 250; // Escape radius
  }
  return 0; // Belongs to the set
}

function drawFractal(offsetX, offsetY) {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const belongsToSet = mandelbrotSet(
        (x - width / 2) * 4 / width + offsetX,
        (y - height / 2) * 4 / height + offsetY
      );
      ctx.fillStyle = `hsl(${time % 360}, 100%, ${belongsToSet}%)`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

function animate() {
  const scrollSpeed = 0.001;
  const offsetX = scrollSpeed % time;
  const offsetY = scrollSpeed % time;
  time += 1;
  drawFractal(offsetX, offsetY);
  requestAnimationFrame(animate);
}

animate();
