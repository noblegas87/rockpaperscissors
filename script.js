function getComputerChoice(){
    let computerChoice= Math.floor(Math.random() * 3);

    if(computerChoice==0){
        return 'rock';
    }
    else if(computerChoice==1){
        return 'scissors';
    }else if(computerChoice==2){
        return 'paper';
    }
 }
 
 function getHumanChoice(){
    userChoice=prompt("Enter a choice");
    return userChoice.toLowerCase();
  
    
 }
//          Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.
let humanScore=0;
let computerScore=0;


function playRound(humanChoice,computerChoice){
console.log(`Computer choice is ${computerChoice}`);
console.log(`Human choice is ${humanChoice}`);

if(humanChoice=='rock' && computerChoice=='scissors'){
console.log("Human wins! Rock beats scissors")
humanScore++;
}else if(humanChoice=='scissors' && computerChoice=='rock'){
console.log("Computer wins! Rocks beats scissors")

computerScore++;

}else if(humanChoice=='paper' && computerChoice=='rock'){
console.log("Human wins! paper beats scissors");
humanScore++;
}else if(humanChoice=='rock' && computerChoice=='paper'){
console.log("Computer wins wins! paper beats scissors");
computerScore++;
}else if(humanChoice=='scissors'  && computerChoice=='paper'){
console.log("Human wins! scissors beats paper")
humanScore++;
}else if(humanChoice=='paper'  && computerChoice=='scissors'){
console.log("Computer wins! scissors beats paper");

computerScore++;
}else{
console.log("Computer and Human tie!!!")
}


}


//  const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// Play the game
for (let i = 0; i < 5; i++) {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}


if(computerScore>humanScore){
console.log("Computer wins the game")
}else if(computerScore<humanScore){
console.log("Human wins the game")
}else{
console.log("Tie")
}

// playRound(humanSelection, computerSelection);
// playRound(humanSelection, computerSelection);
// playRound(humanSelection, computerSelection);
// playRound(humanSelection, computerSelection);
// playRound(humanSelection, computerSelection);
//  console.log(getComputerChoice())