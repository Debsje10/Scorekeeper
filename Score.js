alert('Keep up yoo SCOOOREEEEE')


var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#disPlay");
var p1Display1 = document.querySelector("#disPlay1");
var p1Score = 0;

console.log(p1Display)

p1Button.addEventListener("click", function(){
    p1Score++;
    p1Display.textContent = p1Score;
}); 


p2Button.addEventListener("click", function(){
    p1Score++;
    p1Display1.textContent = p1Score;

}); 


