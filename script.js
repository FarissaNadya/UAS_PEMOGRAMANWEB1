const links = document.querySelectorAll("nav a");
const slides = document.querySelectorAll(".slide");

function showSlide(id) {
  slides.forEach(slide => {
    slide.classList.remove("active");
  });
  const target = document.querySelector(id);
  if (target) target.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide("#html");
});

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    showSlide(targetId);
  });
});
