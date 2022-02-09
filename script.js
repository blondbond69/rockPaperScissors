// CREATE function getId that randomly select number from 1 to 3

function getId() {
    return Math.floor(Math.random() * 3) + 1;  
}
// console.log(getId()); 

// CREATE function computerPlay that return string depending of the drawn number from 1 to 3 

function computerPlay() {
    const currentId = getId(); 
    if (currentId === 1) {
        return "Rock";
    } else if (currentId === 2) {
        return "Paper";
    } else 
        return "Scissors"; 
}

// computerPlay(); 

console.log(computerPlay()); 

//CREATE function singleRound that contains one round of RPS game.

function getUserPick() {
    const userPick = prompt("Choose your weapon!").toLowerCase(); 
    const firstLetter = userPick.charAt(0).toUpperCase(); 
    const restOfString = userPick.slice(1); 
    return firstLetter + restOfString;
}  

//console.log(getUserPick()); 

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "Computer Wins! Paper beats rock."
        } else if (playerSelection === "Rock") {
            if (computerSelection === "Scissors") {
                return "You Win! Rock beats scissors"
            } else if (playerSelection === "Rock") {
                if (computerSelection === "Rock") {
                    return "Draw. Rock and rock don/'t want to fight."
                } else if (playerSelection === "Paper") {
                    if (computerSelection === "Scissors") {
                        return "Computer Wins! Scissors beats paper"
                    } else if (playerSelection === "Paper") {
                        if (computerSelection === "Rock") {
                            return "You Win! Paper beats rock"
                        } else if (playerSelection === "Paper") {
                            if (computerSelection === "Paper") {
                                return "Draw. Paper and paper don/'t want to fight"
                            } else if (playerSelection === "Scissors") {
                                if (computerSelection === "Rock") {
                                    return "Computer Wins. Rock beats scissors"
                                } else if (playerSelection === "Scissors") {
                                    if (computerSelection === "Paper") {
                                        return "You Win! Scissors beats paper"
                                    } else if (playerSelection === "Scissors") {
                                        if (computerSelection === "Scissors") {
                                            return "Draw. Scissors and scissors don/'t want to fight."
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
}
} 

//singleRound(playerSelection, computerSelection); 

let playerSelection = getUserPick();
let computerSelection = computerPlay();
console.log(singleRound(playerSelection, computerSelection));