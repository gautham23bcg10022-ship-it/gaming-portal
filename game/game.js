let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

let player = { x: 180, y: 350, size: 20 };
let coin = { x: Math.random() * 380, y: Math.random() * 380, size: 15 };
let score = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") player.x -= 10;
  if (e.key === "ArrowRight") player.x += 10;
  if (e.key === "ArrowUp") player.y -= 10;
  if (e.key === "ArrowDown") player.y += 10;
});

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player
  ctx.fillStyle = "yellow";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  // Draw coin
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(coin.x, coin.y, coin.size, 0, Math.PI * 2);
  ctx.fill();

  // Collision
  let dist = Math.hypot(player.x - coin.x, player.y - coin.y);
  if (dist < 25) {
    score++;
    coin.x = Math.random() * 380;
    coin.y = Math.random() * 380;
  }

  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, 10, 20);

  requestAnimationFrame(loop);
}

loop();
