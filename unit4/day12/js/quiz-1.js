const result=document.querySelector("#result");
const url="https://reqres.in/api/products/10";

let xhr=new XMLHttpRequest();
xhr.open("GET",url);
xhr.send();

xhr.onreadystatechange=function(){
    if(xhr.status==200 && xhr.readyState==4){
        let goods=JSON.parse(xhr.responseText);
        result.innerHTML=`
            성명:${goods.data.name}<br/>
            년도:${goods.data.year}
        `;
    }
}
