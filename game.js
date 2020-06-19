//Try not to use global variables
//They are bad for security reasons ;)
let playerScore = 0;
let computerScore = 0;


//Randomly pick a selection using the random function. This function goes through the array and chooses a random
//index value in the array that returns that value at the index.
function computerSelection(){
    let selections = ["Rock", "Paper", "Scissors"];
    let selection = selections[Math.floor(Math.random() * selections.length)];
    //Print the selection to the console to see if it works...
    console.log("Computers selection: " + selection);
    return selection;
}


// prompt for you to choose your weapon
// for now it is random like the computer.
function playerSelection(){
    let selections = ["Rock", "Paper", "Scissors"];
    let decision = selections[Math.floor(Math.random() * selections.length)];
    console.log("Players selection: " + decision);
    return decision;
}


function gameRound() {
    let cawk = 0;
    let playerWeapon = playerSelection();
    let computerWeapon = computerSelection();


    if (playerWeapon === computerWeapon) {
        cawk = 0;
    } else if (playerWeapon === "Rock" && computerWeapon === "Scissors") {
        cawk = 1;
    } else if (playerWeapon === "Scissors" && computerWeapon === "Paper") {
        cawk = 1;
    } else if (playerWeapon === "Paper" && computerWeapon === "Rock") {
        cawk = 1;
    } else {
        cawk = 2;
    }

    
    if (cawk === 0) {
        alert("Tie!");
    } else if (cawk === 1) {
        alert("Win!");
        playerScore++;
    } else {
        alert("Lose!")
        computerScore++;
    }

    console.log("Computers score: " + computerScore)
    console.log("Player score: " + playerScore)
}

