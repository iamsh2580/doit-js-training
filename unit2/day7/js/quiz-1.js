//요소 추가하기
const userName=document.querySelector("#username");
const userMajor=document.querySelector("#major");
const btn=document.querySelector("button");
const tbody=document.querySelector("#attendant > tbody");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let newTr=document.createElement("tr");
    let newTd1=document.createElement("td");
    newTd1.innerText=`${userName.value}`;
    let newTd2=document.createElement("td");
    newTd2.innerText=`${userMajor.value}`;
    
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    tbody.appendChild(newTr);

    userName.value="";
    userMajor.value="";
})