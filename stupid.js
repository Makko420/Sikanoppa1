
const players = []
const scores = [];
var targetScore = 0;
var streak = 0;
var turn = 1;
var gameHasBeenWon = false;

function game() {
    if (document.getElementById("score").value < 10) {
        document.getElementById("optAlert").innerHTML = "Pistemäärä voittamiseen on liian pieni. Pitää olla Vähintään 10";
    } else {
        if (players.length >= 2) {
            var a = document.getElementById("options");
            var b  = document.getElementById("peli");
            a.style.display = "none";
            b.style.display = "block";
        
            targetScore = document.getElementById("score").value;
            document.getElementById("vuoro").innerHTML = players[turn - 1] + " Heittää noppaa"
        } else {
            document.getElementById("optAlert").innerHTML = "Pelaajia pitää olla vähintään 2";
        }
    }
}

 

function roll() {
    var d = Math.random();
    if (d <= 0.166) {
        document.getElementById("c").src="img/one.png"
        endTurn(2);
    } else if (d <= 0.332) {
        document.getElementById("c").src="img/two.png"
        streak += 2;
    } else if (d <= 0.498) {
        document.getElementById("c").src="img/three.png"
        streak += 3;
    } else if (d <= 0.664) {
        document.getElementById("c").src="img/four.png"
        streak += 4;
    }else  if (d <= 0.832) {
        document.getElementById("c").src="img/five.png"
        streak += 5;
    } else {
        document.getElementById("c").src="img/six.png"
        streak += 6;
    }
    document.getElementById(turn).innerHTML = players[turn - 1] + ": " + scores[turn - 1] + " (+" + streak + ")"
}

function endTurn(i) {
    if (i != 2) {
        scores[turn - 1] = scores[turn - 1] + streak;
        if (scores[turn - 1] >= targetScore && gameHasBeenWon == false) {
            document.getElementById("gameAlert").innerHTML = players[turn - 1] + " Voitti pelin!! Voitte jatkaa peliä jos haluatte";
            gameHasBeenWon = true;
        }
    }
    document.getElementById(turn).innerHTML = players[turn - 1] + ": " + scores[turn - 1];
    if (turn < players.length) {
        turn += 1;
    } else {
        turn = 1;
    }
    streak = 0;
    document.getElementById("vuoro").innerHTML = players[turn - 1] + " Heittää noppaa"
}

function addPlayer() {
    var yesnt = 1;
    players.push(document.getElementById("add").value);
    scores.push(0);
    let text = "<ul>";
    players.forEach(spare);
    text += "</ul>";
    document.getElementById("b").innerHTML = text;

    function spare(value) {
        text += "<li id=" + yesnt + ">" + value + "</li>";
        yesnt += 1;
    }
}