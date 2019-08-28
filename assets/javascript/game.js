


var crytalVal
var randomNum = 0;
var playerScore = 0;
var wins = 0;
var losses = 0; 

$(document).ready(function() {


function gameStart (){
wins = 0;
losses = 0;
randomNum = Math.floor(Math.random()*100)+19;
console.log(randomNum);
}
gameStart();

//Update the Goal number in the dom 
$("#goal").text(randomNum);





});