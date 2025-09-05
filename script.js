// Get elements
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const button = document.getElementById("magicBtn");

// Button click action
button.addEventListener("click", () => {
  // Change text
  title.textContent = "✨ You clicked the button!";
  subtitle.textContent = "JavaScript just updated this text dynamically 🚀";

  // Add an animation effect
  title.style.transition = "transform 0.5s ease, color 0.5s ease";
  title.style.transform = "scale(1.2)";
  title.style.color = "#ffeb3b";

  // Reset after 1 second
  setTimeout(() => {
    title.style.transform = "scale(1)";
    title.style.color = "#fff";
  }, 1000);

  // Fun alert
  alert("Thanks for interacting with my website! 🎉");
});

// Extra effect: Random background color on double click
document.body.addEventListener("dblclick", () => {
  const colors = ["#89f7fe", "#66a6ff", "#ff9a9e", "#fad0c4", "#fbc2eb", "#a1c4fd"];
  document.body.style.background = `linear-gradient(120deg, ${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]})`;
});
