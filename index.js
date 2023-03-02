var player1 = prompt("What is first player name?");
var player2 = prompt("What is second player name?");

function respond(){
  var name1 = document.querySelector(".p1").innerHTML = player1;
  var name2 = document.querySelector(".p2").innerHTML = player2;

  var randomNumber1 = Math.floor(Math.random()*6) +1;
  var randomNumber2 = Math.floor(Math.random()*6) +1;

  var imageNumber1 = "images/dice" + randomNumber1 + ".png";
  var imageNumber2 = "images/dice" + randomNumber2 + ".png";

  var number1 = document.querySelector(".img1").setAttribute("src", imageNumber1);
  var number2 = document.querySelector(".img2").setAttribute("src", imageNumber2);

  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = name1 + " Wins🚩";
  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = name2 + " Wins🚩";
  }
  else{
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector(".reload").addEventListener("click", respond);
