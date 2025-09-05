// Select hero section
const hero = document.querySelector(".hero");

// Listen to scroll
window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  // Move background slower than scroll for parallax
  hero.style.backgroundPositionY = offset * 0.5 + "px";
});

