// Select the toggle button and the body element
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load the theme from localStorage if it exists
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggleButton.textContent = 'Switch to Light Mode';
}

// Toggle the theme on button click
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save the theme in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggleButton.textContent = 'Switch to Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggleButton.textContent = 'Switch to Dark Mode';
  }
});
