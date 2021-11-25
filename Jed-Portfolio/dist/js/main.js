// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

//Set the Initial State of Menue
let showMenu = false;

//Event Listenrs
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    //Loop through the menu items and add the show class
    navItems.forEach((item) => item.classList.add("show"));
    //Set menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    //Loop through the menu items and remove the show class
    navItems.forEach((item) => item.classList.remove("show"));
    //Set menu State
    showMenu = false;
  }
}
