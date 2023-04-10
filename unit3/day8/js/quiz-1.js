/*생년 월일 입력 후, 계산 클릭시
생일로부터 지금까지 며 칠이 지났는지(또는 몇 시간)- 양력기준 

입력값 받아와 변수 저장 후

-getTime()

-Date()
-텍필에 입력한 값을 가져와 저장? <?
-getMonth()+1
-text와 html inner
*/

const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const bttn = document.querySelector("#bttn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");

const today=new Date();

console.log(today.getFullYear());

bttn.addEventListener("click",()=>{
    const birthDay=new Date(birthYear.value,birthMonth.value-1,birthDate.value);

    let passed=today.getTime()-birthDay.getTime();
    let passedDay=(Math.floor(passed/(1000*60*60*24)));
    let passedHours=(Math.floor(passed/(1000*60*60)));

    current.innerText=
    `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;
    
    resultDays.innerText=`날짜로는 ${passedDay}일이 흐르고,`;
    resultHours.innerText=`시간으로는 ${passedHours}시간이 흘렀습니다`;
})

