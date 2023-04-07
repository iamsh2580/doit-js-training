/* 사용자가 프롬프트 창에 숫자 입력 -> 함수로 넘겨서 양수음수0 판단 후 알림창 */

//parseInt는 숫자가 아니면 NaN을 반환
const num=parseInt(prompt("숫자 입력"));

function whatNum(a){
    if(a>0){
        document.write(`${a}는 양수입니다.`);
    }else if(a<0){
        document.write(`${a}는 음수입니다.`);
    }else{
        document.write("0 입니다.");
    }
}
if(!isNaN(num)){
    whatNum(num);
}else{
    document.write("숫자가 아닙니다.");
}