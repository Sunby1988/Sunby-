/**
 * Created by tydic on 16/6/30.
 */


var CANVAS_WIDTH = 1000,CANVAS_HEITHT = 1000;

window.onload = function(){

    createCanvas();

    drawRect();

    //drawImage();
}

function createCanvas(){
    document.body.innerHTML = "<canvas id=\"mycanvas\" width=\""+CANVAS_WIDTH+"\" height=\""+CANVAS_HEITHT+"\"></canvas>";
    mycanvas = document.getElementById("mycanvas");
    ctx = mycanvas.getContext("2d");
}

function drawRect(){
    //ctx.strokeStyle = "#fff0f0";
    //context.scale(2,0.5);
    //ctx.fillRect(20,20,400,200);
    //ctx.rotate(45);

    //ctx.translate(222,111);

    //ctx.font = "48px serif";
    //ctx.shadowColor = "black";
    //ctx.shadowOffsetX = 15;
    //ctx.shadowOffsetY = 20;
    //ctx.shadowBlur = 3;
    //ctx.fillStyle = "green";
    //ctx.fillText("Hello world", 50, 100);



    //绘图
    //ctx.beginPath();
    //ctx.moveTo(50,50);
    //ctx.lineTo(200, 80);
    //ctx.stroke();


//    绘制曲线
//    ctx.beginPath();
//    ctx.moveTo(50,20);
//    ctx.quadraticCurveTo(230, 80, 50, 100);
//    ctx.stroke();
//
//    ctx.fillStyle = 'blue';
//// start point
//    ctx.fillRect(50, 20, 10, 10);
//// end point
//    ctx.fillRect(50, 100, 10, 10);
//    ctx.fillStyle = 'red';
//// control point
//    ctx.fillRect(230, 30, 10, 10);


    //开始一个新的绘制路径
    ctx.beginPath();
    //设置弧线的颜色为蓝色
    ctx.strokeStyle = "blue";
    var circle = {
        x : 100,    //圆心的x轴坐标值
        y : 100,    //圆心的y轴坐标值
        r : 50      //圆的半径
    };
    //沿着坐标点(100,100)为圆心、半径为50px的圆的顺时针方向绘制弧线
    ctx.arc(circle.x, circle.y, circle.r, Math.PI, Math.PI / 2, true);
    //按照指定的路径绘制弧线
    ctx.stroke();



}



function drawImage(){
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img,0,0);
    }
    img.src = "1.jpg";
}