function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
  const animatedElements = document.querySelectorAll(".animated");

  animatedElements.forEach(function(element) {
    element.classList.add("show");
  });
});