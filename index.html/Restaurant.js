var bar = document.getElementById("bar");
var barjs = document.querySelector(".barjs");
bar.addEventListener("click",abcd );


function abcd() {
console.log(bar);
barjs.classList.toggle("bar_click");   
}

const onclose = document.querySelector("onclose");
onclose.addEventListener("click",abc);
function abc() {
onclose.classList.toggle("bar_click");
    
}