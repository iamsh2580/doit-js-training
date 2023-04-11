const origin=document.querySelector("#origin");
const result=document.querySelector("#result");
let numbers=[2,4,6,8,10];

//tail()
//배열길이가 1보다 크면 1번째요소 빼고 나머지, 1이면 배열 전체 반환
//slice(시작위치,끝위치) :시작위치,끝위치 직전까지 추출
function tail(a){
    if(a.length>1){
        let aa= a.slice(1);
        return aa;
    }else if(a.length==1){
        return a;
    }   
}


origin.innerText=numbers;
result.innerText=tail(numbers);