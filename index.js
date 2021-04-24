var diceImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

(function diceRoll() {
    var randomWinner1 = Math.floor(Math.random() * diceImage.length);
    document.querySelector(".img1").src = diceImage[randomWinner1];
    var randomWinner2 = Math.floor(Math.random() * diceImage.length);
    document.querySelector(".img2").src = diceImage[randomWinner2];

    if (randomWinner1 > randomWinner2) {
      document.querySelector("h1").innerText = "🚩 Player 1 wins!";
    } else if (randomWinner2 > randomWinner1) {
      document.querySelector("h1").innerText = "Player 2 wins! 🚩";

    } else{
      document.querySelector("h1").innerText = "Draw!" ;
    }





    })();
