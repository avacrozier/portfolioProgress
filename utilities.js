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

const darkModeToggle = document.getElementById('darkModeToggle');
let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    applyDarkModeColors();
  } else {
    applyLightModeColors();
  }

  darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

ScrollReveal().reveal('.scrollRevealParts', {delay:200});

/* I used Claude to check my work, and used this block of suggested text so the Typed function works properly with the text still in the HTML*/
const aboutEl = document.getElementById('about');
const aboutText = aboutEl.innerHTML;          
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
    aboutEl.style.minHeight = aboutEl.offsetHeight + 'px';  
    aboutEl.innerHTML = '';                                 

    new Typed('#about', {
        strings: [aboutText],
        typeSpeed: 10,
        showCursor: false   // optional: hides the blinking cursor when it's done
    });
}

$('.slickClass').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  infinite: false,
  adaptiveHeight: true
});