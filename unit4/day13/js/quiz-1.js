const url="http://dummyjson.com/quotes";

fetch(url)
.then(reponse=>reponse.json())
.then(data=>{
    const result=document.querySelector("#result");
    const rdNum=Math.floor((Math.random()*data.quotes.length)+1);
    result.querySelector(".quote").innerHTML=data.quotes[rdNum].quote;
    result.querySelector(".author").innerHTML=`-${data.quotes[rdNum].author}-`;
    }    
).catch(error=>console.error(error));


// const quotesURL = "http://dummyjson.com/quotes";

// fetch(quotesURL)
//   .then(response => response.json())
//   .then(data => {
//     const result = document.querySelector("#result");
//     const random = Math.floor(Math.random() * 30);  // 0 ~ 29 사이의 수
//     result.querySelector(".quote").innerHTML = data.quotes[random].quote;
//     result.querySelector(".author").innerHTML = ` - ${data.quotes[random].author}`;
//   })
//   .catch(error => console.log(error));