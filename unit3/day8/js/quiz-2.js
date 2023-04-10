/*
전체 저장, 럭키저장
추첨 버튼
maxnum=럭키 넘
럭키배열길이가 될 때 까지  
랜덤넘버 *전체숫자
끝나면 스타이룿가 표시
*/

const seed=document.querySelector("#seed");
const total=document.querySelector("#total");
const rafBtn=document.querySelector("#raffle");
const clearBtn=document.querySelector("#clear");

const result=document.querySelector("#result");
let luckNum=[];

rafBtn.addEventListener("click",(e)=>{

    e.preventDefault();
    for(let i=0;i<total.value;i++){
        luckNum[i]=Math.floor((Math.random())*seed.value+1);
    }
    result.classList.add("show");
    result.innerText=`당첨자:${luckNum}번`;
    
})