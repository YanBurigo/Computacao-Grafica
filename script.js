"use strict";
var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

var x = 200,
    y = 100,
    larg = 10,
    alt = 10;
var ang = 0;

const audio = document.querySelector('audio');

audio.volume = 0.75;

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //mapa
    ctx.fillStyle = "rgb(0, 128, 0)";
    ctx.fillRect(0, 0, 640, 480);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.beginPath();
    ctx.arc(100, 380, 70, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillRect(90, 370, 450, 80);
    ctx.beginPath();
    ctx.arc(550, 380, 70, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillRect(540, 90, 80, 300);
    ctx.beginPath();
    ctx.arc(550, 90, 70, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillRect(350, 20, 200, 80);
    ctx.beginPath();
    ctx.arc(350, 90, 70, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillRect(30, 260, 80, 120);
    ctx.beginPath();
    ctx.arc(100, 250, 70, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillRect(90, 180, 210, 80);
    ctx.beginPath();
    ctx.arc(291, 190, 70, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillRect(281, 75, 80, 120);

    ctx.fillStyle = "rgb(0, 128, 0)";
    ctx.beginPath();
    ctx.arc(470, 300, 70, 0, 2 * Math.PI);
    ctx.arc(170, 315, 55, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(480, 160, 60, 0, 2 * Math.PI);
    ctx.arc(430, 170, 70, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(211, 110, 70, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "rgb(255, 255, 255)";
    //ctx.fillRect(140, 400, 80, 20);
    //ctx.fillRect(240, 400, 80, 20);
    //ctx.fillRect(340, 400, 80, 20);
    //ctx.fillRect(440, 400, 80, 20);

    ctx.beginPath();
    
    ctx.moveTo(120,220);
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.quadraticCurveTo(250,220,250,220);
    ctx.moveTo(250,220);
    ctx.quadraticCurveTo(320,200,320,120);
    ctx.moveTo(320,120);
    ctx.quadraticCurveTo(310,40,500,60);
    ctx.moveTo(500,60);
    ctx.quadraticCurveTo(610,60,570,370);
    ctx.moveTo(570,370);
    ctx.quadraticCurveTo(560,440,120,400);
    ctx.moveTo(120,400);
    ctx.quadraticCurveTo(70,400,70,310);
    ctx.moveTo(70,310);
    ctx.quadraticCurveTo(70,240,120,220);
    /*
    moveto(xinicial, yinicial)
    quadratoccurveto(xinc,yinc,xfinal,yfinal)
    */
    //ctx.quadraticCurveTo(60,120,65,100);
    //ctx.quadraticCurveTo(125,100,125,62.5);
    //ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke();


    //carro

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
var turnLeft = 0;
var turnRight = 0;

document.onkeydown = function (evt) {
    audio.play();
    switch (evt.keyCode) {
        case 39: //direita
            turnRight = 39;
            break;
        case 37: //esquerda
            turnLeft = 37;
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
        x -= 2 * Math.cos(ang / Math.PI);
        y -= 2 * Math.sin(ang / Math.PI);
    }
}, 10);

var intervalo2 = setInterval(() => {
    if (turnRight == 39 && movement != 0) {
        ang += 0.08;
    } else if (turnLeft == 37 && movement != 0) {
        ang -= 0.08;
    }
}, 10);

document.onkeyup = function (evt) {
    if (evt.keyCode == 38 || evt.keyCode == 40) {
        movement = 0;
    }
    if (evt.keyCode == 37) {
        turnLeft = 0;
    }
    if (evt.keyCode == 39) {
        turnRight = 0;
    }
};
