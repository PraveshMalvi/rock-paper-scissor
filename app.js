const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

const generateComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNum === 1) computerChoice = "Rock";
  if (randomNum === 2) computerChoice = "Scissor";
  if (randomNum === 3) computerChoice = "Paper";
  computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
  if (computerChoice === userChoice) result = "It's a Draw";
  if (computerChoice === "Rock" && userChoice === "Paper") result = "You Win!";
  if (computerChoice === "Rock" && userChoice === "Scissor")
    result = "You Lost!";
  if (computerChoice === "Paper" && userChoice === "Scissor")
    result = "You Win!";
  if (computerChoice === "Paper" && userChoice === "Rock") result = "You Lose!";
  if (computerChoice === "Scissor" && userChoice === "Rock")
    result = "You Win!";
  if (computerChoice === "Scissor" && userChoice === "Paper")
    result = "You Lose!";
  resultDisplay.innerHTML = result;
};
