/*조건1 입력한 숫자가 1보다 커야한다 ->입력하지않거나 1보다 작으면 알림 
    조건1 충족 후 1또는 2 부터 입력숫자까지 배열에 넣는다
    이후 그 배열수%2==0 인 것만 알아내서 sum에 넣기 반복

*/

const num=prompt("1보다 큰 숫자를 입력하세요.");
const numbers=[];
let sum=0; //의문점 값이 바뀌니까 let 했어요

if(num<1 || num == null){
    alert("1보다 큰 숫자를 입력하세요!!");
}else{
    for(let i=1;i<=num;i++){
        numbers.push(i);
    }
    for(let j=0;j<numbers.length;j++){
        if(numbers[j]%2==0){
            sum+=numbers[j]
            document.write(numbers[j]+" ----- "+sum+"<br>"); 
        }
    }
}