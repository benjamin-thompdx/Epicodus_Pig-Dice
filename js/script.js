// Business-Logic

//
function Game() {
    this.turn = "player1";
    this.player1Score = 0
    this.player2Score = 0
    this.points = [2,3,4,5,6];
    this.tempScore = 0; 
}

function checkRoll(game, roll) {
    if (game.points.includes(roll)) {
        game.tempScore += roll;
        $("#running-total").html(game.tempScore);
    } else {
        nextTurn(game);
    }

}

function nextTurn(game, tempScore) {
    if (game.turn === "player1") {
        if (tempScore) {
            game.player1Score += tempScore;
            $("#player1-score").html(game.player1Score);
            checkWinner(game, game.player1Score);
        }
        game.turn = "player2";
        $("#player2-panel").css("background-color", "lightblue");
        $("#player1-panel").css("background-color", "whitesmoke");
    } else {
        if (tempScore) {
            game.player2Score += tempScore;
            $("#player2-score").html(game.player2Score);
            checkWinner(game, game.player2Score);
        }
        game.turn = "player1";
        $("#player1-panel").css("background-color", "lightblue");
        $("#player2-panel").css("background-color", "whitesmoke");
    } 
    game.tempScore = 0
    $("#running-total").html(game.tempScore);;
}

function checkWinner(game, score) {
    if (score >= 20) {
        alert(game.turn + " has won the game!");
        newGame();
    }
}

function newGame(){
    var game = new Game;
        $("#running-total").html("0");
        $("#player1-score").html("0");
        $("#player2-score").html("0");
        $("#roll-result").html("0");
        $("#player1-panel").css("background-color", "lightblue");
}

//User-Logic

$(document).ready(function(){
    var game = new Game()
    $("#player1-panel").css("background-color", "lightblue");
    $("#roll").click(function() {
        var die = Math.floor((Math.random() *6) +1);
        $("#roll-result").html(die);
        checkRoll (game, die);
    });
    $("#hold").click(function() {
        nextTurn(game, game.tempScore);
        console.log(game);
    });
    $("#new-game").click(function() {
        newGame();
    });
    $("#instructions").click(function() {
        alert("Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to \"hold\": If the player rolls a 1, they score nothing and it becomes the next player's turn. If the player rolls any other number, it is added to their turn total and the player's turn continues. If a player chooses to \"hold\", their turn total is added to their score, and it becomes the next player's turn. The first player to score 100 or more points wins.");
    });
});