function toggleMenu() {
  var navMenu = document.querySelector("nav");
  if (navMenu.style.display === "none") {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
}

function toggleMenu2() {
  var mql = window.matchMedia("(max-width: 800px)");
  if (mql.matches) {
    // If media query matches
    var navMenu = document.querySelector("nav");
    navMenu.classList.toggle("open");
  }
}
