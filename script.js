// CREATE function getId that randomly select number from 1 to 3

function getId() {
    return Math.floor(Math.random() * 3) + 1;  
}
// console.log(getId()); 

// CREATE function computerPlay that return string depending of the drawn number from 1 to 3 

function computerPlay() {
    const currentId = getId(); 
    if (currentId === 1) {
        return "rock";
    } else if (currentId === 2) {
        return "paper";
    } else 
        return "scissors"; 
}

computerPlay(); 

//console.log(computerPlay()); 

//CREATE function singleRound that contains one round of RPS game.



