// Switch between themes based on slider value
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

// Get the theme slider and attach event listener
document.getElementById('theme-toggle').addEventListener('input', function () {
  switchTheme(this.value);
});

// Initialize with the default light theme
switchTheme('1');
