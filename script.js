const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  hero.style.backgroundPositionY = offset * 0.5 + "px";
});
