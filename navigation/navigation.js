document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const submenu = dropdown.querySelector(".submenu");

        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent body click event from firing
            submenu.classList.toggle("hidden"); // Toggle the visibility of the submenu
        });

        document.body.addEventListener("click", function () {
            if (!submenu.classList.contains("hidden")) {
                submenu.classList.add("hidden"); // Hide the submenu if clicking outside
            }
        });

        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent closing when clicking inside dropdown
        });
    });
});
