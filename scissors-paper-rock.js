// Declare variables
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  tie: 0,
};

// Declare functions
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.tie}`;
}

function pickComputerMove() {
  const randomnumber = Math.floor(Math.random() * 3) + 1;
  let computermove;

  if (randomnumber === 1) {
    computermove = "rock";
  } else if (randomnumber === 2) {
    computermove = "paper";
  } else if (randomnumber === 3) {
    computermove = "scissors";
  }
  return computermove;
}
// What does this function does 
function playGame(playerMove) {
  if (
    playerMove !== "rock" &&
    playerMove !== "paper" &&
    playerMove !== "scissors"
  ) {
    console.error("Invalid player move");
    return;
  }

  const computermove = pickComputerMove();
  let Result;

  // Determine the result of the game
  if (playerMove === "scissors") {
    if (computermove === "rock") {
      Result = "You lose.";
    } else if (computermove === "paper") {
      Result = "You win.";
    } else if (computermove === "scissors") {
      Result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computermove === "rock") {
      Result = "You win.";
    } else if (computermove === "paper") {
      Result = "Tie.";
    } else if (computermove === "scissors") {
      Result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computermove === "rock") {
      Result = "Tie.";
    } else if (computermove === "paper") {
      Result = "You lose.";
    } else if (computermove === "scissors") {
      Result = "You win.";
    }
  }

  // Update the score
  if (Result === "You win.") {
    score.wins += 1;
  } else if (Result === "You lose.") {
    score.losses += 1;
  } else if (Result === "Tie.") {
    score.tie += 1;
  }

  // Update local storage
  localStorage.setItem("score", JSON.stringify(score));

  // Update the score element
  updateScoreElement();

  // Update the result element
  document.querySelector(".js-result").innerHTML = Result;

  // Update the moves element
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img class="move-icon" src="${playerMove}-emoji.png"> <img class="move-icon" src="${computermove}-emoji.png"/> computer`;
}

// Call the updateScoreElement function
updateScoreElement();
