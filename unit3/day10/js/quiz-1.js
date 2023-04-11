const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

const arr=[2,4,6,8,10];
let sum=0;

function showArray(area,arr){
    let str;
    str="<table><tr>";
    for(let i=0;i<arr.length;i++){
        str+="<td>"+arr[i]+"</td>"
    }
    str+="</tr></table>"
    area.innerHTML=str;

}

showArray(origin,arr);

for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
arr.push(sum);

showArray(result,arr);