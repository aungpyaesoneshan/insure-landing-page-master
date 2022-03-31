const hamburgerMenu = document.querySelector(".nav-links-hamburger");
const closeMenu = document.querySelector(".nav-links-close");
const hamburgerMenuDiv = document.querySelector(".nav-links-hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
  hamburgerMenuDiv.style.bottom = "-82vh";
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";

  hamburgerMenuDiv.style.bottom = "100px";
  hamburgerMenu.style.display = "block";
});
