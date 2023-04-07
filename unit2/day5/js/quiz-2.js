/* 수 입력 -> 수가 숫자인가? isNaN->최대공약수 함수 ->  */

const num1=document.querySelector("#number1");
const num2=document.querySelector("#number2");
const btn=document.querySelector("#calc");
const result=document.querySelector("#result");

let gcdNum=1;

btn.addEventListener("click",()=>{
    n1=parseInt(num1.value);
    n2=parseInt(num2.value);

    isNum(n1,n2);
});
//최대공약수 
function GCD(a,b){
    let min=(a>=b)?b:a;
    for(let i=0;i<=min;i++){
        if(a%i==0 && b%i==0){
            gcdNum=i;
        }
    }
    result.innerText=`${gcdNum}`;
}

function isNum(a,b){
    if(!isNaN(a) && !isNaN(b)){
        GCD(a,b);
    }else{
        result.innerText=`숫자입력`;
    }
}