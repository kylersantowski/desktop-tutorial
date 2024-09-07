document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const angleSlider = document.getElementById('angleSlider');
    const gridSizeSlider = document.getElementById('gridSizeSlider');
    const projectionSelect = document.getElementById('projectionSelect');

    function updateGrid() {
        drawGrid(ctx, canvas, parseInt(angleSlider.value), parseInt(gridSizeSlider.value), projectionSelect.value);
    }

    angleSlider.addEventListener('input', updateGrid);
    gridSizeSlider.addEventListener('input', updateGrid);
    projectionSelect.addEventListener('change', updateGrid);

    // Initial drawing
    updateGrid();
});
