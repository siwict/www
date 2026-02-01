const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

////////////////////////

const logo = document.getElementById("logo");
let isScrolled = false;

function updateLogo() {
  const scrollY = window.scrollY;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    // Mobile: always small logo
    logo.classList.add("scrolled");
    logo.src = "images/siw5.png";
  } else {
    // Desktop: switch between big and small with hysteresis to prevent flickering
    if (scrollY > 80 && !isScrolled) {
      logo.classList.add("scrolled");
      logo.src = "images/siw5.png";
      isScrolled = true;
    } else if (scrollY < 30 && isScrolled) {
      logo.classList.remove("scrolled");
      logo.src = "images/siw3.png";
      isScrolled = false;
    }
  }
}

// Call updateLogo
window.addEventListener("scroll", updateLogo);
window.addEventListener("resize", updateLogo);
window.addEventListener("load", updateLogo);