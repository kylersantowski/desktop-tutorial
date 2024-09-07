/**
 * Function to clear the canvas.
 */
function clearCanvas(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Function to draw the grid of points on the canvas.
 * @param {number} angle - The projection angle.
 * @param {number} gridSize - The size of the grid.
 * @param {string} projectionType - The type of projection selected.
 */
function drawGrid(ctx, canvas, angle, gridSize, projectionType) {
    clearCanvas(ctx, canvas);

    const gridSpacing = canvas.width / gridSize;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const startX = -Math.floor(gridSize / 2);
    const startY = -Math.floor(gridSize / 2);

    for (let x = startX; x <= gridSize + startX; x++) {
        for (let y = startY; y <= gridSize + startY; y++) {
            const point = [x * (2 * pi / gridSize), y * (pi / gridSize)];
            const rotatedPoint = [point[0] + angle * radians, point[1]];

            const projectedPoint = getProjectedPoint(rotatedPoint, projectionType);
            const projectedX = centerX + projectedPoint[0] * (canvas.width / (2 * pi));
            const projectedY = centerY + projectedPoint[1] * (canvas.height / pi);

            ctx.beginPath();
            ctx.arc(projectedX, projectedY, 1, 0, 2 * pi);
            ctx.fillStyle = 'red';
            ctx.fill();
        }
    }
}
