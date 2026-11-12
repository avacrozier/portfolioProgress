function applyDarkModeColors() {
  const root = document.documentElement;

  root.style.setProperty('--myRed', 'var(--myDarkModeRed)');
  root.style.setProperty('--myYellow', 'var(--myDarkModeYellow)');
  root.style.setProperty('--myBlue', 'var(--myDarkModeBlue)');
  root.style.setProperty('--myLightBlue', 'var(--myDarkModeLightBlue)');
}

function applyLightModeColors() {
  const root = document.documentElement;

  root.style.removeProperty('--myRed');
  root.style.removeProperty('--myYellow');
  root.style.removeProperty('--myBlue');
  root.style.removeProperty('--myLightBlue');
}

let isDarkMode = false;

document.getElementById('darkModeToggle').addEventListener('click', (event) => {
  event.preventDefault();
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    applyDarkModeColors();
  } else {
    applyLightModeColors();
  }
});