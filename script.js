document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the 'dropdown' class
  const dropdowns = document.querySelectorAll(".dropdown");

  // Add click event listeners to each dropdown
  dropdowns.forEach((dropdown) => {
      // Find the submenu within the dropdown
      const submenu = dropdown.querySelector(".submenu");

      // Add a click event listener to the dropdown
      dropdown.addEventListener("click", function (event) {
          event.stopPropagation(); // Prevent the click event from reaching the body

          // Toggle the 'hidden' class to show/hide the submenu
          if (submenu) {
              submenu.classList.toggle("hidden");
          }
      });

      // Close the submenu when clicking outside the dropdown
      document.body.addEventListener("click", function () {
          if (submenu && !submenu.classList.contains("hidden")) {
              submenu.classList.add("hidden");
          }
      });

      // Prevent the body click event from closing the dropdown
      dropdown.addEventListener("click", function (event) {
          event.stopPropagation();
      });
  });
});
