//객체를 이용하여 그리기
const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


function Rec(x,y,w,h,color){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.color=color;

    this.draw=function(){
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}

let rec1=new Rec(150,150,100,100,"red");
let rec2=new Rec(100,100,200,200,"blue");

rec2.draw();
rec1.draw();