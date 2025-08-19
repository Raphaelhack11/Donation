// Toggle payment options
function togglePayment() {
  document.getElementById("payment-options").classList.toggle("hidden");
}

// Show bitcoin wallet
function showBitcoin() {
  document.getElementById("bitcoin-box").classList.toggle("hidden");
}

// Copy wallet address
function copyWallet() {
  const walletInput = document.getElementById("wallet");
  walletInput.select();
  walletInput.setSelectionRange(0, 99999); // For mobile
  document.execCommand("copy");
  alert("Wallet address copied!");
}

// Redirect with flash animation
function redirectThankYou() {
  const sentBtn = document.querySelector(".send-btn");
  sentBtn.classList.add("flash");

  setTimeout(() => {
    window.location.href = "thankyou.html";
  }, 700);
}

// Floating particles background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedY = Math.random() * 1 - 0.5;
    this.speedX = Math.random() * 1 - 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(200,200,200,0.5)";
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
