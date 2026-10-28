
const themeToggle = document.querySelector("#theme-toggle");

// Listen for clicks on the theme toggle button
themeToggle.addEventListener("click", function () {

  // Switch the dark-theme class on or off
  document.body.classList.toggle("dark-theme");

  // Check whether dark mode is now active
  const isDarkMode = document.body.classList.contains("dark-theme");

  // Update the button's accessibility state
  themeToggle.setAttribute("aria-pressed", isDarkMode);

  // Update the button's accessible label
  if (isDarkMode) {
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  } else {
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  }

});
