"use strict";
var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

var x = 200,
  y = 100,
  larg = 10,
  alt = 10;
var ang = 0;

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.strokeStyle = "rgb(0, 255, 100)";
  ctx.lineWidth = 2;
  ctx.save(); //Faz um backup do CTX
  ctx.translate(x, y);
  ctx.rotate(ang / Math.PI);
  ctx.beginPath();

  //Parte de cima
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 0);

  ctx.moveTo(50, 0);
  ctx.lineTo(25, 20);

  ctx.moveTo(25, 0);
  ctx.lineTo(25, 20);

  ctx.moveTo(0, 0);
  ctx.lineTo(25, 20);

  //Parte de baixo

  ctx.moveTo(50, 45);
  ctx.lineTo(0, 45);

  ctx.moveTo(25, 0);
  ctx.lineTo(25, 45);

  ctx.moveTo(0, 50);
  ctx.lineTo(25, 20);

  ctx.moveTo(50, 50);
  ctx.lineTo(25, 20);

  ctx.stroke();
  ctx.fillRect(-larg / 2, -alt / 2, larg, alt);
  ctx.fillRect(larg * 4.5, alt - 15, larg, alt);
  ctx.fillRect(larg * 4.5, alt + 30, larg, alt);
  ctx.fillRect(-larg / 2, alt + 30, larg, alt);
  ctx.restore(); //Restaura o backup do CTX
  requestAnimationFrame(desenhar);
}
requestAnimationFrame(desenhar);

var movement = 0;
var turn = 0;

document.onkeydown = function (evt) {
  switch (evt.keyCode) {
    case 39: //direita
      turn = 39;
      break;
    case 37: //esquerda
      turn = 37;
      break;
    case 38: //cima
      movement = 38;
      break;
    case 40: //baixo
      movement = 40;
      break;
  }
};
var intervalo = setInterval(() => {
  if (movement == 38) {
    x += 3 * Math.cos(ang / Math.PI);
    y += 3 * Math.sin(ang / Math.PI);
  }
  if (movement == 40) {
    x -= Math.cos(ang / Math.PI);
    y -= Math.sin(ang / Math.PI);
  }
}, 10);

var intervalo2 = setInterval(() => {
  if (turn == 39 && movement != 0) {
    ang += 0.07;
  } else if (turn == 37 && movement != 0) {
    ang -= 0.07;
  } 
}, 10);

document.onkeyup = function (evt) {
  if (evt.keyCode == 38 || evt.keyCode == 40) {
    movement = 0;
  }
  if (evt.keyCode == 37 || evt.keyCode == 39) {
    turn = 0;
  }
};
