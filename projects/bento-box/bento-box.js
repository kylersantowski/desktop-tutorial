// JavaScript to toggle visibility of sections
function toggleSection(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    } else {
        console.error(`No element found with class ${sectionClass}`);
    }
}

// JavaScript to update calories
function updateCalories() {
    const todayCalories = Math.floor(Math.random() * 1000);
    const weekCalories = Math.floor(Math.random() * 7000);
    const monthCalories = Math.floor(Math.random() * 30000);

    document.getElementById('calories-today').innerText = todayCalories;
    document.getElementById('calories-week').innerText = weekCalories;
    document.getElementById('calories-month').innerText = monthCalories;
}

// JavaScript to update personal bests
function updatePersonalBests() {
    const fastest5k = `${Math.floor(Math.random() * 30) + 20} min`; // Realistic range for 5K run
    const heaviestDeadlift = `${Math.floor(Math.random() * 500) + 100} lbs`; // Realistic range for deadlift
    const longestPlank = `${Math.floor(Math.random() * 5) + 1} min`; // Realistic range for plank

    document.getElementById('fastest-5k').innerText = fastest5k;
    document.getElementById('heaviest-deadlift').innerText = heaviestDeadlift;
    document.getElementById('longest-plank').innerText = longestPlank;
}
