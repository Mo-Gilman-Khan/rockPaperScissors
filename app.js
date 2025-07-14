let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Try again";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin,userChoice,compChoice) =>
{
    if(userWin){
        console.log("You Win!");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        user_score.innerText=userScore;
    }
    else {
        console.log("You Lose");
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        comp_score.innerText=compScore;
    }
}
const playGame = (userChoice) => {
    console.log("userChoice = ",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("compChoice = ",compChoice);

    if(userChoice===compChoice){
        //draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});