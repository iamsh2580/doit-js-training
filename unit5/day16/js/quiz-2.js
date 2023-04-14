const canvas =document.querySelector("canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function Rec(x,y,w,h,color){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.color=color;

    this.dx=Math.floor(Math.random()*10)+1;
    this.dy=Math.floor(Math.random()*10)+1;

    this.draw=function(){
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);

    }
    this.move=function(){
        this.x += this.dx;
        this.y += this.dy;

        if(this.x+this.w>canvas.width || this.x<0){
            this.dx = -this.dx;
        }
        if(this.y+this.h>canvas.width || this.y<0){
            this.dy = -this.dy;
        }
        this.draw();
    }
}

const r1=new Rec(10,10,10,10,"red");
const r2=new Rec(20,20,20,20,"blue");

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    r1.move();
    r2.move();

    requestAnimationFrame(update);
}

r1.draw();
r2.draw();
update();