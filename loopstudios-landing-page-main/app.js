const menuBar = document.querySelector(".menu--bar");
const closeMenu = document.querySelector(".close--bar");
const smallScreenMenu = document.querySelector(".nav__links--small");
menuBar.addEventListener("click", () => {
  smallScreenMenu.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
  smallScreenMenu.style.display = "none";
});
