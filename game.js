//Try not to use global variables
//They are bad for security reasons ;)



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
function playerSelection(){
    let decision = getRadioVal();
    console.log("Players selection: " + decision);
    return decision;
}

function getRadioVal() {
    var val;
    // get list of radio buttons with specified name

    // Issue is, val is not defined, need to figure out how to assign radio selection to val variable
    // loop through list of radio buttons
    for (i=0;i<document.forms[0].Choice.length;i++) {
        if (document.forms[0].Choice[i].checked) {
            user_input = document.forms[0].Choice[i].value;
        val=user_input;
        return val;
        }
    }
}


function gameRound() {
    let cawk = 0;
    let playerWeapon = playerSelection();
    let computerWeapon = computerSelection();
    let playerScore = 0;
    let computerScore = 0;

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


