"use strict";
var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

var x = 200, y = 100, larg = 10, alt = 10;
var ang =0;
function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(0, 0, 200)";
    ctx.strokeStyle = "rgb(255,128,0)";
    ctx.lineWidth = 2;
    ctx.save(); //Faz um backup do CTX
    ctx.translate(x,y)
    ctx.rotate(ang);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(50,0);
    ctx.stroke();
    ctx.fillRect(-larg/2, -alt/2, larg, alt);
    ctx.restore(); //Restaura o backup do CTX
    requestAnimationFrame(desenhar);
}
requestAnimationFrame(desenhar);

document.onkeydown = function (evt){
    
    switch(evt.keyCode){
        case 39: //direita
            x+=5;
            break;
        case 37: //esquerda
            x-=5;
            break;
        case 38: //cima
            y-=5;
            break;
        case 40: //baixo
            y+=5;
            break;
        case 90: 
            ang+=0.5;
            break;
        case 88: 
            ang-=0.5;
            break;
    }
}