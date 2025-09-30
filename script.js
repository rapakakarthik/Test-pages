// script.js
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    let rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    } else {
      section.style.opacity = 0.6;
      section.style.transform = "translateY(50px)";
    }
  });
});
