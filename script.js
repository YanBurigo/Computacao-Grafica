"use strict";
var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

var x = 200, y = 100, larg = 10, alt = 10;
var ang =0;

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.strokeStyle = "rgb(0, 255, 100)";
    ctx.lineWidth = 2;
    ctx.save(); //Faz um backup do CTX
    ctx.translate(x, y)
    ctx.rotate(ang/Math.PI);
    ctx.beginPath();


    //Parte de cima
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 0);

    ctx.moveTo(50, 0)
    ctx.lineTo(25, 20);

    ctx.moveTo(25, 0)
    ctx.lineTo(25, 20);

    ctx.moveTo(0, 0)
    ctx.lineTo(25, 20);

    //Parte de baixo

    ctx.moveTo(50, 45);
    ctx.lineTo(0, 45);

    ctx.moveTo(25, 0)
    ctx.lineTo(25, 45);

    ctx.moveTo(0, 50)
    ctx.lineTo(25, 20);

    ctx.moveTo(50, 50)
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



/*var intervalo = setInterval(() => {

    document.onkeydown = function (evt){

        switch(evt.keyCode){
            case 39: //direita
                console.log("direita")
                ang+=0.1;
                break;
            case 37: //esquerda
                ang-=0.1;
                break;
        }
    }
    
  }, 10);*/

  document.onkeydown = function (evt){

    switch(evt.keyCode){
        case 38 && 37: //cima
            console.log("god")
            x+=5*Math.cos(ang/Math.PI);
            y+=5*Math.sin(ang/Math.PI);
            ang-=0.1;
            break;
        
        case 38 && 39: //cima
            console.log("god")
            x+=5*Math.cos(ang/Math.PI);
            y+=5*Math.sin(ang/Math.PI);
            ang+=0.1;
            break;
        case 39: //direita
            console.log("direita")
            ang+=0.1;
            break;
        case 37: //esquerda
            ang-=0.1;
            break;
        case 38: //cima
        console.log("cima")
            x+=5*Math.cos(ang/Math.PI);
            y+=5*Math.sin(ang/Math.PI);
                
            break;
        case 40: //baixo
            x-=5*Math.cos(ang/Math.PI);
            y-=5*Math.sin(ang/Math.PI);
            break;
    }
} 

  /*var intervalo2 = setInterval(() => {

    document.onkeydown = function (evt){

        switch(evt.keyCode){
            case 38: //cima
            console.log("cima")
                x+=5*Math.cos(ang/Math.PI);
                y+=5*Math.sin(ang/Math.PI);
                
                break;
            case 40: //baixo
                x-=5*Math.cos(ang/Math.PI);
                y-=5*Math.sin(ang/Math.PI);
                break;
        }
    }
    
  }, 10);*/