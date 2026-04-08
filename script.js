var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  mousewheel: true,
  keyboard: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// PETIR
const canvas = document.getElementById("lightning");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

  ctx.strokeStyle = "orange";
  ctx.stroke();
}

setInterval(() => {
  if (Math.random() > 0.7) lightning();
}, 300);

// MODAL + DOWNLOAD
function openModal(img) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = img.src;
  document.getElementById("downloadBtn").href = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
