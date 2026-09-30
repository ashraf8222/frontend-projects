let plus=document.querySelector(".upper .optr");
let count=document.querySelector(".upper .count");
let min=document.querySelector("#minus");
let reset=document.querySelector(".lower .reset");

plus.addEventListener("click",function(data){
    count.innerHTML= parseInt(count.innerHTML) + 1;
})
min.addEventListener("click",function(data){
    if(parseInt(count.innerHTML)!=0)
    count.innerHTML= parseInt(count.innerHTML) - 1;
})
reset.addEventListener("click",function(data){
    count.innerHTML= 0;
})
