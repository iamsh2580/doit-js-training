//마우스 오버하면 이미지 바꾸기
const imgBox=document.querySelector("#container > img");

imgBox.addEventListener("mouseover",()=>{
    imgBox.src="./images/pic-1.jpg";
})
imgBox.addEventListener("mouseout",()=>{
    imgBox.src="./images/pic-2.jpg"
})

