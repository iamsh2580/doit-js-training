const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");

//텍스트
ctx.beginPath();
ctx.font="bold 300px sans-serif"
ctx.fillText("GOOD",100,320);

ctx.globalCompositeOperation="source-atop";

//그림
let img=new Image();
img.onload=function(){
    ctx.drawImage(img,100,100);
}    
img.src="images/text-bg.jpg";


