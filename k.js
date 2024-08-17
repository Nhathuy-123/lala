function createFireworks() {
  const container = document.getElementById("fireworksContainer");

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.classList.add("firework");
    container.appendChild(particle);

    const size = Math.random() * 10 + 5 + "px";
    const x = Math.random() * 100 + "%";
    const y = Math.random() * 100 + "%";
    const duration = Math.random() * 2 + 1 + "s";

    particle.style.width = size;
    particle.style.height = size;
    particle.style.left = x;
    particle.style.top = y;
    particle.style.animationDuration = duration;
    particle.style.backgroundColor = getRandomColor();

    particle.addEventListener("animationend", function () {
      particle.remove();
    });
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
