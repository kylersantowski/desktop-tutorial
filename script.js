document.addEventListener("DOMContentLoaded", function () {
  // Dropdown Menu Handling
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
      const submenu = dropdown.querySelector(".submenu");

      dropdown.addEventListener("click", function (event) {
          event.stopPropagation(); // Prevent click event from reaching the body

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

      // Prevent click event from closing the dropdown
      dropdown.addEventListener("click", function (event) {
          event.stopPropagation();
      });
  });

  // Theme Switching
  function switchTheme(theme) {
      document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
      
      if (theme === '1') {
          document.body.classList.add('light-theme');
      } else if (theme === '2') {
          document.body.classList.add('dark-theme');
      } else if (theme === '3') {
          document.body.classList.add('blue-theme');
      }
  }

  const themeSlider = document.getElementById('theme-toggle');
  themeSlider.addEventListener('input', function () {
      switchTheme(this.value);
  });

  // Initialize with the default light theme
  switchTheme('1');
});
