const pi = Math.PI;
const degrees = 180 / pi;
const radians = pi / 180;

// Custom projection function
function customProjection(point) {
    const [lambda, phi] = point;
    return [lambda * Math.cos(phi), phi];
}

// Mercator projection function
function mercatorProjection(point) {
    const [lambda, phi] = point;
    return [lambda, Math.log(Math.tan((pi / 4) + (phi / 2)))];
}

// Orthographic projection function
function orthographicProjection(point) {
    const [lambda, phi] = point;
    return [Math.cos(phi) * Math.sin(lambda), Math.sin(phi)];
}

/**
 * Function to get projected point based on projection type.
 * @param {number[]} point - The point to project.
 * @param {string} projectionType - The type of projection.
 * @returns {number[]} The projected point.
 */
function getProjectedPoint(point, projectionType) {
    switch (projectionType) {
        case 'mercator':
            return mercatorProjection(point);
        case 'orthographic':
            return orthographicProjection(point);
        default:
            return customProjection(point);
    }
}
