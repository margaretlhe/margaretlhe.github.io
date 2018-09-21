// Theme: Types of Coffee

var words = ["cappuccino", "latte", "espresso", "americano", "decaf", "affogato", "mocha", "black", "cortado" ];  
var wins = 0;




function startGame() {
    var guesses = [];
    var num_correct = 0;                // # of correct guesses for a word
    var num_guesses = 0;
    var guesses_remaining = 11;        // starts off as maximum # of guesses
    var complete = false;             // complete will become true when full word is guessed
    var correct_guesses = [];
     //var correct_guesses = Array.apply(null, Array(word_len)).map(String.prototype.valueOf, "_");
 

    
    //randomly select an element from the words array
    var random_word = words[Math.floor(Math.random() * words.length)];
    console.log(random_word);
    var word_len = random_word.length;           // number of letters in random word
    

    for (var i=0; i < word_len; i++) {
        correct_guesses.push("_");
    }    
    
    document.getElementById("Word").innerHTML = correct_guesses.join (" ");
    
    document.getElementById("remaining").innerHTML = guesses_remaining;

    document.getElementById("alreadyGuessed").innerHTML = guesses.join(" ");
    

    // event listener for button pressed
    document.onkeyup = function(event) {
        var input = String.fromCharCode(event.which);
        letter = input.toLowerCase();

        // if the word has not been fully guessed
        if (guesses_remaining > 0 && complete == false) {
            if (guesses.includes(letter)) {      // prevent user from wasting a guess on a letter already guessed
                alert("letter already guessed; choose another one");
            }

            else {
                guesses.push(letter);
                document.getElementById("alreadyGuessed").innerHTML = guesses.join(" "); // update list of letters already guessed

                num_guesses++;
                guesses_remaining--;
                document.getElementById("remaining").innerHTML = guesses_remaining;  // update guesses remaining on web page

                if (random_word.includes(letter)) { 
                    for (var i = 0; i < word_len; i++) {
                        if (random_word[i] == letter) {
                            correct_guesses[i] = letter;
                            document.getElementById("Word").innerHTML = correct_guesses.join(" "); //update word displayed
                        }
                    }
                    if (correct_guesses.includes("_") == false) {
                        complete = true;
                    }
            
                    num_correct++;
                }
            }            
        }
        if (complete == true) {
            alert("Congratulations! You guessed the word");
            wins++;
            document.getElementById("Wins").innerHTML = wins;       // update wins on web page

            // reset variables and restart Game 
            complete = false;   // reset completion boolean before restarting game
            startGame();        // restart Game     
        }
        
        if (guesses_remaining == 0 && complete == false) {
            alert("Sorry, you lost! Try again"); 
            startGame();       // restart Game
        }
    }
}



// Call main function
startGame();

