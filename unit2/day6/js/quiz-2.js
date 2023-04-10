const btn=document.querySelector("#bttn");
const nav=document.querySelector("#nav");

btn.addEventListener("click",()=>{
    btn.classList.toggle("active");
    nav.classList.toggle("active");
})