/*상세 설명 보기,닫기 버튼 클릭할때 마다 상세설명 토글 소스 */

const viewBtn=document.querySelector("#view");
const detail=document.querySelector("#detail");

viewBtn.addEventListener("click",()=>{
    detail.classList.toggle("toggle");
})