const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");

ctx.strokeStyle="black";
ctx.fillStyle="yellow";

ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(400,200);
ctx.lineTo(150,500);
ctx.lineTo(250,100);
ctx.lineTo(350,500);
ctx.closePath();
ctx.stroke();