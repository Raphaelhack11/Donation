// ======================
// Floating particles bg
// ======================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = "rgba(0,0,0,0.6)"; // dark gray particles
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // bounce off edges
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 8;
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  let numberOfParticles = 60;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 3 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speedX = (Math.random() - 0.5) * 1.5;
    let speedY = (Math.random() - 0.5) * 1.5;
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 1)"; // pure white bg
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// ======================
// Donation button logic
// ======================
const donateBtn = document.getElementById("donate-btn");
const paymentOptions = document.getElementById("payment-options");
const bitcoinBtn = document.getElementById("bitcoin-btn");
const bitcoinBox = document.getElementById("bitcoin-box");
const copyBtn = document.getElementById("copy-btn");
const walletAddress = document.getElementById("wallet-address");
const sendBtn = document.getElementById("send-btn");

if (donateBtn) {
  donateBtn.addEventListener("click", () => {
    paymentOptions.classList.toggle("show");
  });
}

if (bitcoinBtn) {
  bitcoinBtn.addEventListener("click", () => {
    bitcoinBox.classList.toggle("show");
  });
}

if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    walletAddress.select();
    walletAddress.setSelectionRange(0, 99999); // mobile support
    document.execCommand("copy");
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
  });
}

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    window.location.href = "thankyou.html";
  });
        }
