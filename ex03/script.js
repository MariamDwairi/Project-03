let count = 0;

const countDisplay = document.getElementById("count");
const  increment = document.getElementById("btn-inc")
const  decrement = document.getElementById("btn-dec")
const  reset = document.getElementById("btn-res")

function updatecounter(){
	countDisplay.textContent = count;

	if (count>0){
	countDisplay.style.color="green"}
	else if (count<0){
	countDisplay.style.color="red"}
        else {
        countDisplay.style.color="black"}
}

increment.addEventListener("click",function(){
count ++;
updatecounter()

});

decrement.addEventListener("click",function(){
count --;
updatecounter()

});

reset.addEventListener("click",function(){
count=0;
updatecounter()

});
