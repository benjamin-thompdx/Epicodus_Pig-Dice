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
        game.turn = "player2"
    } else {
        if (tempScore) {
            game.player2Score += tempScore;
            $("#player2-score").html(game.player2Score);
            checkWinner(game, game.player2Score);
        }
        game.turn = "player1"
    } 
    game.tempScore = 0
    $("#running-total").html(game.tempScore);;
}

function checkWinner(game, score) {
    if (score >= 20) {
        alert(game.turn + " has won the game!");
        var game = new Game;
        $("#running-total").html("0");
        $("#player1-score").html("0");
        $("#player2-score").html("0");
        $("#roll-result").html("0");

    }
}

//User-Logic

$(document).ready(function(){
    var game = new Game()
    $("#roll").click(function() {
        var die = Math.floor((Math.random() *6) +1);
        $("#roll-result").html(die);
        checkRoll (game, die);
    });
    $("#hold").click(function() {
        nextTurn(game, game.tempScore);
        console.log(game);
    });
});