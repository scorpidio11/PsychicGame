
    // VARIABLES
      // ==========================================================================
    var wins = 0;
    var loses = 0;
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //var computerChoices = "abcdefghijklmnopqrstuvwxyz";
    var guessLeft = 9;

    var userGuessTotal = [];
    //var computerGuessTotal = [];

    // var reset = function () {
    //     document.location.reload(true);

    // }

     // FUNCTIONS
      // ==============================================================================
    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
      //Guessed Alpahet added to empty arry and show on screen
        userGuessTotal.push(userGuess);
      

        if (userGuess == computerGuess){
            wins++;
            guessLeft = 9;
            userGuessTotal.length = 0;
        }

        else if  (guessLeft == 0)
        
        {
            loses++;
            guessLeft = 9;
            userGuessTotal.length = 0;
          
        }

        else if (userGuess !== computerGuess){
            guessLeft--; //decrementing the guesses left
        }  

      


        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =


            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + loses + "</p>" +
            "<p>Guesses Left: " + guessLeft + "</p>" +
            // "<p>Computer Guesses so far:  " + computerGuessTotal + "</p>" +
            "<p>Your Guesses so far: " + userGuessTotal + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
  
    };
