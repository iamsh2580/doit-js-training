/*2개의 숫자 입력받아 최대공약수 구하는 함수 작성
최대공약수: 두 수 모두 나누어 덜어지는 수 중 가장 큰 값 
<과정>
두 수 중 가장 작은 값을 구한다
두 수를 작은 수로 나누는데 동시에 나누어지는 수에서 가장 큰 것이 바로 최공약
1.조건  a>=b? b<a?
2.for(let i=2;i<작은 수;i++){
    if(a%i==0 && b&i==0){
        gcdNum=i;
        }
    }
*/
let gcdNum=1;

function GCD(a,b){
    let min=(a>=b)?b:a;
    for(let i=0;i<=min;i++){
        if(a%i==0 && b%i==0){
            gcdNum=i;
        }
    }
    document.write(`${a}와 ${b}의 최대공약수는 ${gcdNum}입니다.`)
}

const n1=parseInt(prompt("첫번째 숫자를 입력하세요"));
const n2=parseInt(prompt("두번째 숫자를 입력하세요"));

if(!isNaN(n1) && !isNaN(n2)){
    GCD(n1,n2);
}else{
    document.write("숫자를 입력해주세요");
}