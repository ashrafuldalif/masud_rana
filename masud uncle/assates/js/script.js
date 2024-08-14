document.addEventListener("scroll", () => {
  const header = document.querySelector("nav");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
function toggleSubMenu(event) {
  event.preventDefault();

  const subMenu = event.target.nextElementSibling;
  subMenu.classList.toggle("show_side_nav");
}

// Attach the event listener to all links within sub-menus
document.querySelectorAll(".ml").forEach((link) => {
  link.addEventListener("click", toggleSubMenu);
});
document.querySelector(".side_nav_btn").addEventListener("click",e=>{

  document.querySelector(".nav_phone").classList.remove("hide");
});
document.querySelector(".close_nav").addEventListener("click", (e) => {
  document.querySelector(".nav_phone").classList.add("hide");
});