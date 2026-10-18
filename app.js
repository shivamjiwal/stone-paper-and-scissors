const choices = document.querySelectorAll(".choice");
const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");
const msg = document.querySelector("#msg");

let userScores = 0;
let compScores = 0;

const getCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * options.length);
  return options[randomIdx];
};

const drawGame = () => {
  msg.innerText = "Game was a draw, Play again!";
  msg.style.backgroundColor = "#dda15e";
  msg.style.color = "#fefae0";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScores++;
    userScore.innerText = userScores;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScores++;
    compScore.innerText = compScores;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red";
  }
  msg.style.color = "#fefae0";
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.querySelector("img").id;
    playGame(userChoice);
  });
});
