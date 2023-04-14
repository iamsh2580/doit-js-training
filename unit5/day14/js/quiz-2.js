const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let img=new Image();
img.onload=function(){
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
}
img.src="images/cat.jpg";

ctx.beginPath();
ctx.ellipse(380,400,250,300,0,0,Math.PI*2);
ctx.clip();