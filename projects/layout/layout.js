// Toggle between Flexbox and Grid layout
const toggleButton = document.getElementById('toggleButton');
const toggleContainer = document.getElementById('toggleContainer');

toggleButton.addEventListener('click', function () {
    if (toggleContainer.classList.contains('flex-container')) {
        toggleContainer.classList.remove('flex-container');
        toggleContainer.classList.add('grid-container');
        toggleButton.textContent = 'Switch to Flexbox Layout';
    } else {
        toggleContainer.classList.remove('grid-container');
        toggleContainer.classList.add('flex-container');
        toggleButton.textContent = 'Switch to Grid Layout';
    }
});

// Dynamic background color change on hover
const boxes = document.querySelectorAll('.box, .grid-item');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

boxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.backgroundColor = getRandomColor();
    });

    box.addEventListener('mouseleave', function() {
        this.style.backgroundColor = ''; // Reset to original on mouse leave
    });
});

// Responsive element scaling with slider
const sizeSlider = document.getElementById('sizeSlider');
const resizableBoxes = document.querySelectorAll('.resizable');

sizeSlider.addEventListener('input', function() {
    const newSize = `${sizeSlider.value}px`;
    resizableBoxes.forEach(box => {
        box.style.width = newSize;
        box.style.height = newSize;
    });
});

// Toggle visibility of sections
function toggleSection(sectionId, checkboxId) {
    const section = document.getElementById(sectionId);
    const checkbox = document.getElementById(checkboxId);

    checkbox.addEventListener('change', function() {
        section.style.display = checkbox.checked ? 'block' : 'none';
    });
}

toggleSection('flexbox-layout', 'toggleFlexbox');
toggleSection('grid-layout', 'toggleGrid');
toggleSection('fixed-layout', 'toggleFixed');
toggleSection('responsive-layout', 'toggleResponsive');
