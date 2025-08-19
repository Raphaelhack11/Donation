// Confetti animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function randomColor() {
  const colors = ["#ff0000", "#ffffff", "#ffd700", "#00c3ff", "#ff6f91"];
  return colors[Math.floor(Math.random() * colors.length)];
}

class Confetto {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -20;
    this.size = Math.random() * 8 + 4;
    this.speed = Math.random() * 3 + 2;
    this.color = randomColor();
  }

  update() {
    this.y += this.speed;
    this.x += Math.sin(this.y / 20) * 2;
    if (this.y > canvas.height) {
      this.y = Math.random() * -20;
      this.x = Math.random() * canvas.width;
      this.speed = Math.random() * 3 + 2;
      this.size = Math.random() * 8 + 4;
      this.color = randomColor();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.closePath();
  }
}

function initConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push(new Confetto());
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    c.update();
    c.draw();
  });
  requestAnimationFrame(animateConfetti);
}

initConfetti();
animateConfetti();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
