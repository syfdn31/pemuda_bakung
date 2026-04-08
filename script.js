var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  mousewheel: true,
  keyboard: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ⚡ PETIR OREN
const canvas = document.getElementById("lightning");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function lightning() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let x = Math.random() * canvas.width;
  let y = 0;

  ctx.beginPath();
  ctx.moveTo(x, y);

  for (let i = 0; i < 20; i++) {
    x += (Math.random() - 0.5) * 50;
    y += canvas.height / 20;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = "rgba(255,140,0,0.9)";
  ctx.lineWidth = 2;
  ctx.stroke();
}

setInterval(() => {
  if (Math.random() > 0.7) lightning();
}, 300);

// MODAL
function openModal(img) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// POPUP
function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}