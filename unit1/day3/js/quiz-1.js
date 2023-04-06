/*10보다 큰 수를 찾으려면 10이랑 큰지 비교해서 push로 배열넣기? 
for(arr.length){
    if(arr[i]>10){
        배열.push(i);
    }
 document.write(배열)
}
*/

const arr=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const numbers=[];

for(let i =0;i<arr.length;i++){
    if(arr[i]>10){
        numbers.push(arr[i]);
    }
}
document.write(numbers);


