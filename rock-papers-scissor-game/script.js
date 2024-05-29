let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
let msg = document.querySelector("#msg");

let showUserScore = document.getElementById("user-score");
let showcompScore = document.getElementById("comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}
const drawGame = () => {
    console.log("game draw");
    msg.innerText = "match Draw Play Again!";
}


const showWinner = (userWin,userchoice,compChoice) =>{
    if(userWin){
        console.log("user wins");

        userScore++;
        
        console.log(userScore);
        msg.innerText = `You win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("comp wins");
        compScore++;
        console.log(compScore);
        msg.innerText = `You lose! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
    showUserScore.innerText = `${userScore}`;
    showcompScore.innerText = `${compScore}`;
    if(userScore == 10 || compScore == 10){
        userScore = 0;
        compScore = 0;
    }
}

const playGame = (userchoice) => {
    console.log("user click " + userchoice);
    compChoice = genCompChoice();
    console.log("computer choice " + compChoice);

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true; 

        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else if (userchoice === "scissor") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {
        userchoice = choice.getAttribute("id");
        playGame(userchoice)
    })
})