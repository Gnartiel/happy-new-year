const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 3 + 2;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.life = 100;
    this.dx = Math.random() * 4 - 2;
    this.dy = Math.random() * 4 - 2;
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.life--;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

let fireworks = [];
function addFirework(x, y) {
  for (let i = 0; i < 50; i++) {
    fireworks.push(new Firework(x, y));
  }
}

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((firework, i) => {
    firework.update();
    firework.draw();
    if (firework.life <= 0) fireworks.splice(i, 1);
  });
  requestAnimationFrame(animate);
}
const audioElement = document.getElementById('music');
document.addEventListener("click", function(event) {
    if (event.target) {                
        audioElement.muted = false;
        audioElement.play();
    }
});

canvas.addEventListener('click', (e) => {
  addFirework(e.clientX, e.clientY);
});

setInterval(() => {
  addFirework(Math.random() * canvas.width, Math.random() * canvas.height);
}, 1000);

animate();
