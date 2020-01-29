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
        console.log(game.tempScore += roll);
    } else {
        nextTurn(game);
    }

}

function nextTurn(game, tempScore) {
    if (game.turn === "player1") {
        if (tempScore) {
            game.player1Score = tempScore;
        }
        game.turn = "player2"
    } else {
        if (tempScore) {
            game.player2Score = tempScore;
        }
        game.turn = "player1"
    } 
    game.tempScore = 0
    console.log(game, "game");
}

//User-Logic

$(document).ready(function(){
    var game = new Game()
    $("#roll").click(function() {
        var die = Math.floor((Math.random() *6) +1);
        console.log(die)
        checkRoll (game, die);
    });

});