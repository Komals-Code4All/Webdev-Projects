// ---------------- VARIABLES ---------------------
let isRanNumGenerated = false;
let ranNum;
let attempts = 0;
let guess

addEventListener('submit', submitGuess); //submitGuess is the function that is called when the form is submitted

// ---------------- FUNCTIONS ---------------------

// Generate random number
function genRanNum() {
    if (!isRanNumGenerated) {
        ranNum = Math.floor(Math.random() * 99 + 1);
        isRanNumGenerated = true;
        console.log("Random number generated:", ranNum); // Debugging
    }
}

// Display number once user has guessed correctly
function displayNumber() {
    document.getElementById('displayNumber').innerHTML = ranNum;
}

// Take user's guess
function submitGuess(event) {
try {
    // Prevent the form from submitting
    event.preventDefault();

    let guess = parseInt(document.getElementById('userGuess').value, 10);
    console.log("User guess:", guess); // Debugging

    // Check if the input is a valid number
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('resultText').innerHTML = "Please enter a valid number between 1 and 100.";
        console.log("Invalid input"); // Debugging
        return;
    }

    // Increment number of attempts
    attempts++;

    // Compare the user's guess with the random number
    if (guess === ranNum) {
        document.getElementById('resultText').innerHTML = "Congratulations!<br>You guessed the correct number " + ranNum + " in " + attempts + " attempts.";
        displayNumber();
    } else if (guess > ranNum) {
        document.getElementById('resultText').innerHTML = "Too high! Try lower...";
    } else {
        document.getElementById('resultText').innerHTML = "Too low! Try higher...";
    }

    // Reset the input field
    document.getElementById('userGuess').value = "";
} catch (error) {
    console.error("Error:", error); // Debugging
}

  // Trigger fade-in animation
  triggerFadeIn();
}

// Function to trigger fade-in animation
function triggerFadeIn() {
    const resultText = document.getElementById('resultText');
    resultText.style.animation = 'none'; // Reset animation
    resultText.offsetHeight; // Trigger reflow 
    resultText.style.animation = 'fadeIn 2s ease-in-out'; // Re-apply animation
}

// Function to reset the game
function resetGame() {
    isRanNumGenerated = false; // Reset the flag
    ranNum = null; // Reset the random number
    attempts = 0; // Reset the number of attempts
    document.getElementById('resultText').innerHTML = ""; // Clear the result text
    document.getElementById('displayNumber').innerHTML = "?"; // Hide the random number
    document.getElementById('userGuess').value = ""; // Clear the input field
    genRanNum(); // Generate a new random number
}
  
  // ---------------- MAIN PROCESSING ----------------------

// Generate random number
genRanNum();

// ------------------ END OF PROCESSING --------------------

// ---------------------- NOTES -----------------------------
// 1. The random number should be generated only once, when the page is loaded. 
// 2. The random number should be displayed only after the user has guessed it.
// 3. There should be a means of resetting the game, so that the user can play again.
// 4. When the high/low message is displayed, it is not clear that a new guess has been submiited (no change in innerHTML). Use an animation / colour change?
// 5. Game could reset automatically after a certain time period


//LEARNT: 
//ParseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
//isNAN() function determines whether a value is NaN or not.
//adding a check to see if the random number has already been generated - using a boolean flag to set it to true if it has. How could I use checks elsewhere?