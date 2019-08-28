





$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    var randomNum = "";
    var crystalVal1 = "";
    var crystalVal2 = "";
    var crystalVal3 = "";
    var crystalVal4 = "";

    function gameStart() {
        randomNum = Math.floor(Math.random() * 100) + 19;
        crystalVal1 = Math.floor(Math.random() * 12) + 1;
        crystalVal2 = Math.floor(Math.random() * 12) + 1;
        crystalVal3 = Math.floor(Math.random() * 12) + 1;
        crystalVal4 = Math.floor(Math.random() * 12) + 1;
        console.log(crystalVal1);
        console.log(crystalVal2);
        console.log(crystalVal3);
        console.log(crystalVal4);
        console.log("---------------")

        playerScore = 0;
        //Update the Goal number in the dom 
        $("#goal").text(randomNum);
        $("#score").text(playerScore);
    }
    gameStart();
    
    $("#crystal1").on("click", function () {
        playerScore += crystalVal1;
        $("#score").text(playerScore);

        if (playerScore === randomNum) {
            alert("You Win");
            gameStart();
           
        }
        else if (playerScore >= randomNum) {
            alert("You Loose");
            gameStart();
        }
    });
    
    $("#crystal2").on("click", function () {
        playerScore += crystalVal2;
        $("#score").text(playerScore);

        if (playerScore === randomNum) {
            alert("You Win");
            gameStart();
        }
        else if (playerScore >= randomNum) {
            alert("You Loose");
            gameStart();
        }
    });
    
    $("#crystal3").on("click", function () {
        playerScore += crystalVal3;
        $("#score").text(playerScore);

        if (playerScore === randomNum) {
            alert("You Win");
            gameStart();
        }
        else if (playerScore >= randomNum) {
            alert("You Loose");
            gameStart();
        }
    });
    
    $("#crystal4").on("click", function () {
        playerScore += crystalVal4;
        $("#score").text(playerScore);
        
        if (playerScore === randomNum) {
            alert("You Win");
            gameStart();
        }
        else if (playerScore >= randomNum) {
            alert("You Loose");
            gameStart();
        }
    });

    
    
    
    
    
    
    
});