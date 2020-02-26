alert('Keep up yoo SCOOOREEEEE')


var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#disPlay");
var p1Display1 = document.querySelector("#disPlay1");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;



console.log(p1Display1);

p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if(p1Score===winningScore){
            alert("GAME OVER!!");
        }
        p1Display.textContent = p1Score;
    }
}); 


p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score===winningScore){
            alert("GAME OVER!!");
        }
        
    }
    
    p1Display1.textContent = p2Score;

}); 


