const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const circle={
    x:100,
    y:100,
    r:30,
    dx:4,
    dy:4,
    color:"#222"
}

function drwaCircle(){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.r,0,Math.PI*2,false);
    ctx.fillStyle=circle.color;
    ctx.fill();
}

function move(){
    ctx.fillStyle=`rgba(225,255,255,0.3)`;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //ctx.clearRect(0,0,canvas.width,canvas.height);

    drwaCircle();

    circle.x+=circle.dx;
    circle.y+=circle.dy;

    if(circle.x+circle.r>canvas.width || circle.x-circle.r<0){
        circle.dx =- circle.dx;
    }
    if(circle.y+circle.r>canvas.height || circle.y-circle.r<0){
        circle.dy =- circle.dy;
    }
    requestAnimationFrame(move);
}

move();