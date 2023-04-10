const notiBox=document.querySelector("#noti-box");
const btn=document.querySelector("#bttn");

btn.addEventListener("click",()=>{
    const noti=document.createElement("div");
    noti.classList.add("noti");
    noti.innerText="알림 내용이 표시됩니다.";
    notiBox.appendChild(noti);

    setTimeout(()=>{
        noti.remove();
    },3000);
});