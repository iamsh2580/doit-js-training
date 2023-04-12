const userNumber=document.querySelector("#user-number");
const btn=document.querySelector("button");
const result=document.querySelector("#result");

btn.addEventListener("click",()=>{
    console.log(userNumber.value);

    try{
        if(userNumber.value>10){
            throw "10보다 작은 수를 입력하세요!"
        }else{
            result.innerHTML=`
            ${userNumber.value}
            `;
        }
    }catch(err){
        alert(err);
    }
})