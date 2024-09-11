const canvas = document.getElementById("snowflakeCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth - 20; // Adjust for border size
    canvas.height = window.innerHeight - 20; // Adjust for border size
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial resize

let currentDepth = 4;
let progress = 0;
let direction = 1; // 1 for forward, -1 for backward

function calculatePositionAlongPath(start, end, progress) {
    return start + (end - start) * progress;
}

function drawSnowflakeArm(startX, startY, endX, endY, depth) {
    if (depth === 0) {
        ctx.lineTo(endX, endY);
    } else {
        const deltaX = endX - startX;
        const deltaY = endY - startY;

        const thirdX = startX + deltaX / 3;
        const thirdY = startY + deltaY / 3;

        const twoThirdsX = startX + 2 * deltaX / 3;
        const twoThirdsY = startY + 2 * deltaY / 3;

        const angle = Math.PI / 3; // 60 degrees in radians
        const offsetX = (twoThirdsX - thirdX) * Math.cos(angle) - (twoThirdsY - thirdY) * Math.sin(angle);
        const offsetY = (twoThirdsX - thirdX) * Math.sin(angle) + (twoThirdsY - thirdY) * Math.cos(angle);

        const midX = thirdX + offsetX;
        const midY = thirdY + offsetY;

        const currentX = calculatePositionAlongPath(startX, endX, progress);
        const currentY = calculatePositionAlongPath(startY, endY, progress);

        ctx.lineTo(currentX, currentY);

        // Recursive calls to create the entire arm
        drawSnowflakeArm(startX, startY, thirdX, thirdY, depth - 1);
        drawSnowflakeArm(thirdX, thirdY, midX, midY, depth - 1);
        drawSnowflakeArm(midX, midY, twoThirdsX, twoThirdsY, depth - 1);
        drawSnowflakeArm(twoThirdsX, twoThirdsY, endX, endY, depth - 1);
    }
}

function drawEntireSnowflake() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const armLength = Math.min(canvas.width, canvas.height) * 0.35;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6; // 60 degrees in radians
        const endX = centerX + armLength * Math.cos(angle);
        const endY = centerY + armLength * Math.sin(angle);

        drawSnowflakeArm(centerX, centerY, endX, endY, currentDepth);
    }

    ctx.closePath(); // Close the path to complete the shape
    ctx.fillStyle = "#99c2ff"; // Adjust the fill color as needed
    ctx.fill(); // Fill the snowflake

    // Update progress for path animation
    progress += 0.005 * direction;

    if (progress > 1 || progress < 0) {
        direction *= -1; // Reverse direction at the end or start of the path
    }

    // Call the function again for smooth animation
    requestAnimationFrame(drawEntireSnowflake);
}

drawEntireSnowflake();
