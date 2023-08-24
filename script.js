let option = ["rock","paper","scissors"]; 
const rock = document.getElementById("rock"); 
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let label = document.getElementById("label");

let myAnswer;

function game(){
    let randomIndex = Math.floor(Math.random()* option.length); //a random item from an array
    if(myAnswer==option[randomIndex]){
        label.innerHTML = "You: " + myAnswer + "<br>Computer: " + option[randomIndex] + "<br>" + "Result: tie";
    }
    else if(option[randomIndex]=="rock"){
        if(myAnswer=="paper"){
            label.innerHTML = "You: " + myAnswer + "<br>Computer: " + option[randomIndex] + "<br>" + "Result: you win";
        }
        else if(myAnswer=="scissors"){
            label.innerHTML = "You: " + myAnswer + "<br>Computer: " + option[randomIndex] + "<br>" + "Result: you lose";
        }
    }
    else if(option[randomIndex]=="paper"){
        if(myAnswer=="scissors"){
            label.innerHTML = "You: " + myAnswer + "<br>Computer: " + option[randomIndex] + "<br>" + "Result: you win";
        }
        else if(myAnswer=="rock"){
            label.innerHTML = "You: " + myAnswer + "<br>Computer: " + option[randomIndex] + "<br>" + "Result: you lose";
        }
    }
    else if(option[randomIndex]=="scissors"){
        if(myAnswer=="rock"){
            label.innerHTML = "You: " + myAnswer + "<br>Computer: " + option[randomIndex] + "<br>" + "Result: you win";
        }
        else if(myAnswer=="paper"){
            label.innerHTML = "You: " + myAnswer + "<br>Computer: " + option[randomIndex] + "<br>" + "Result: you lose";
        }
    }
}

rock.addEventListener("click", function(){
    myAnswer = "rock";
    game();
})
paper.addEventListener("click", function(){
    myAnswer = "paper";
    game();
})
scissors.addEventListener("click", function(){
    myAnswer = "scissors";
    game();
})
