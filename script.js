// 🎯 High-Low Number Guessing Game Starter
// You will use prompt(), alert(), and confirm() to make an interactive guessing game!

function playHighLowGame() {
  // Welcome message
  window.alert("🎮 Welcome to the High-Low Number Guessing Game!");
  window.alert("I'm thinking of a number between 1 and 100...");

  // TODO: Create a random number between 1 and 100 and store it in a variable called targetNumber
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  // Example: const targetNumber = Math.floor(Math.random() * 100) + 1;

  // TODO: Create a variable to track how many guesses the player has made
  let counter = 1;
  // Create a variable to store the player's current guess
  let guess = null;

  // TODO: Create a loop that keeps asking the player for a guess until they guess correctly
  // Use window.prompt() to ask for a number
  // Inside your loop:
  // 1️⃣ Convert the input to a number using parseInt()
  while (counter <= 10) {
    guess = window.prompt(`Guess a number`);
    guess = parseInt(guess);
    if (isNaN(guess)) {
      window.alert("🔥Enter a whole number");
      continue;
    } else {
    }

    // 2️⃣ Check if the guess is too high, too low, or correct
    if (guess < 1 && guess >= 100) {
      window.alert("🔥Guess is too high or too low!!");
    }
    if (guess == targetNumber) {
      window.alert("✅ Entered number is correct");
      break;
    }
    if (guess <= targetNumber + 5 && guess >= targetNumber - 5) {
      window.alert("🔥Very close!🎉");
    }
    counter++;
  }

  if (counter == 11 && guess !== targetNumber) {
    window.alert("Game Over!");
  } else {
    // 3️⃣ Use window.alert() to tell the player the result
    window.alert(`🔥Congratulations! You won the game.`);
    // 4️⃣ Count the number of attempts
    window.alert(`✅ Match found in - ${counter} attempts!`);
    // TODO: When the player guesses correctly:
    // - Alert them that they won and show how many attempts it took
    window.alert(`You won the game with: ${counter} attempts!`);
    // - Ask if they want to play again using window.confirm()
    if (window.confirm("Do you want to play again?") == true) {
      playHighLowGame();
      // - If yes, call playHighLowGame() again
    } else {
      window.alert("Thanks for playing the game");
      // - If no, show a “Thanks for playing” message
    }
  }
}
// 🚀 Call the function to start the game
playHighLowGame();
