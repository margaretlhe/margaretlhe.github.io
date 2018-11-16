// Crystal Collector Game

// score object
var stats = {
    score: 0,
    randomNum: 0,
    wins: 0,
    losses: 0
};

// store crystal values
var crystalValues = {
    c1 : 0, 
    c2 : 0,
    c3 : 0, 
    c4 : 0
};

function startGame() {  
    // reset score     
    stats.score = 0;

    // generate new random number (between 19-120)
    stats.randomNum = Math.floor(Math.random()*102 +19);
    console.log(stats.randomNum);

    // reset display values
    $("#Points").text(stats.score);
    $("#RN").text(stats.randomNum); 
    
    // generate random values for crystals
    crystalValues.c1 = Math.floor(Math.random()*12 +1);
    crystalValues.c2 = Math.floor(Math.random()*12 +1);
    crystalValues.c3 = Math.floor(Math.random()*12 +1);
    crystalValues.c4 = Math.floor(Math.random()*12 +1);

    console.log("Crystal 1: " + crystalValues.c1);
    console.log("Crystal 2: " + crystalValues.c2);
    console.log("Crystal 3: " + crystalValues.c3);
    console.log("Crystal 4: " + crystalValues.c4);
}

// run program
startGame();        // initial start to game when you refresh the page

// create crystal button listeners and update total score
document.getElementById("crystal1").addEventListener("click", function(){
    stats.score += crystalValues.c1;
    $("#Points").text(stats.score);
    console.log("score: " + stats.score);

    if (stats.score > stats.randomNum) {
        stats.losses++;
        $("#Losses").text(stats.losses);
        alert("Sorry you lost! Play again.");

        // reset score and restart game
        $("#Points").text(0);
        stats.score = 0;
        startGame();
    }

    else if (stats.score == stats.randomNum) {
        stats.wins++;
        $("#Wins").text(stats.wins);
        alert("Congratulations, you won! Play again");

        // reset score and restart game
        stats.score = 0;
        startGame();
    }
});

document.getElementById("crystal2").addEventListener("click", function(){
    stats.score += crystalValues.c2;
    $("#Points").text(stats.score);
    console.log("score: " + stats.score);

    if (stats.score > stats.randomNum) {
        stats.losses++;
        $("#Losses").text(stats.losses);
        alert("Sorry you lost! Play again.");

        // reset score and restart game
        $("#Points").text(0);
        stats.score = 0;
        startGame();
    }

    else if (stats.score == stats.randomNum) {
        stats.wins++;
        $("#Wins").text(stats.wins);
        alert("Congratulations, you won! Play again");

        // reset score and restart game
        stats.score = 0;
        startGame();
    }
});

document.getElementById("crystal3").addEventListener("click", function(){
    var v3 = crystalValues.c3;
    stats.score += v3;
    $("#Points").text(stats.score);
    console.log("score: " + stats.score);

    if (stats.score > stats.randomNum) {
        stats.losses++;
        $("#Losses").text(stats.losses);
        alert("Sorry you lost! Play again.");

        // reset score and restart game
        $("#Points").text(0);
        stats.score = 0;
        startGame();
    }

    else if (stats.score == stats.randomNum) {
        stats.wins++;
        $("#Wins").text(stats.wins);
        alert("Congratulations, you won! Play again");

        // reset score and restart game
        stats.score = 0;
        startGame();
    }
});

document.getElementById("crystal4").addEventListener("click", function(){
    var v4 = crystalValues.c4;
    stats.score += v4;
    $("#Points").text(stats.score);
    console.log("score: " + stats.score);

    if (stats.score > stats.randomNum) {
        stats.losses++;
        $("#Losses").text(stats.losses);
        alert("Sorry you lost! Play again.");

        // reset score and restart game
        $("#Points").text(0);
        stats.score = 0;
        startGame();
    }

    else if (stats.score == stats.randomNum) {
        stats.wins++;
        $("#Wins").text(stats.wins);
        alert("Congratulations, you won! Play again");

        // reset score and restart game
        stats.score = 0;
        startGame();
    }
});
