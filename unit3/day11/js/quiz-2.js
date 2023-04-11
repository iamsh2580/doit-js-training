//set 이용
//무작위 추출

/*Set
여러 개의 값을 모아놓은 것 중복안됨
let a= new Set()
a.add("추가할 값").add("추가할 값2") 
let b = new Set([1,3,3,2,5])*/

const btn=document.querySelector("button");
const result=document.querySelector("#result");

const luckPro={
    max:6,
    total:45
};

btn.addEventListener("click",()=>{
    let {max,total}=luckPro;
    let luckArr= new Set();

    for(let i=0;i<max;i++){
        luckNum=Math.floor(Math.random()*total)+1;
        luckArr.add(luckNum);
    }
    result.innerText=`${[...luckArr]}`;
});