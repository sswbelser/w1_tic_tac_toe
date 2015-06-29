window.xTurn = true;
window.addEventListener("DOMContentLoaded", function() {
	var sq1 = document.getElementById("top-left");
  	var sq2 = document.getElementById("top-middle");
  	var sq3 = document.getElementById("top-right");
  	var sq4 = document.getElementById("middle-left");
  	var sq5 = document.getElementById("middle-middle");
  	var sq6 = document.getElementById("middle-right");
  	var sq7 = document.getElementById("bottom-left");
  	var sq8 = document.getElementById("bottom-middle");
  	var sq9 = document.getElementById("bottom-right");

  	var reset = function() {
  		window.xTurn = true
  		sq1.innerText = ""
  		sq2.innerText = ""
  		sq3.innerText = ""
  		sq4.innerText = ""
  		sq5.innerText = ""
  		sq6.innerText = ""
  		sq7.innerText = ""
  		sq8.innerText = ""
  		sq9.innerText = ""
  	}

  	var changeText = function() {
    	sq1.addEventListener("click", function(event){
      		addPosition(this);
      		checkWinner();
    	})
    	sq2.addEventListener("click", function(event){
      		addPosition(this);
      		checkWinner();
    	})
    	sq3.addEventListener("click", function(event){
      		addPosition(this);
      		checkWinner();
    	})
    	sq4.addEventListener("click", function(event){
      		addPosition(this);
      		checkWinner();
    	})
    	sq5.addEventListener("click", function(event){
      		addPosition(this);
      		checkWinner();
    	})
    	sq6.addEventListener("click", function(event){
      		addPosition(this);
      		checkWinner();
    	})
    	sq7.addEventListener("click", function(event){
      		addPosition(this);
      		checkWinner();
    	})
    	sq8.addEventListener("click", function(event){
      		addPosition(this);
      		checkWinner();
    	})
    	sq9.addEventListener("click", function(event){
      		addPosition(this);
      		checkWinner();  
    	})
  	}
  	checkWinner();
  	changeText();

	function addPosition (element) {
  		if (element.innerText == ""){
    	if (window.xTurn == true) {
      		element.innerText = "X";
    	}
    	else {
      		element.innerText = "O";
    	}
    	window.xTurn = !window.xTurn;
  		}
	}

	function checkWinner() {
    	if (sq1.innerText == "X" && sq2.innerText == "X" && sq3.innerText == "X") {
      		alert("Player 'X' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq4.innerText == "X" && sq5.innerText == "X" && sq6.innerText == "X") {
      		alert("Player 'X' wins! Press OK to reset game");
      	reset();
    	}
    	else if (sq7.innerText == "X" && sq8.innerText == "X" && sq9.innerText == "X") {
      		alert("Player 'X' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq1.innerText == "X" && sq4.innerText == "X" && sq7.innerText == "X") {
      		alert("Player 'X' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq2.innerText == "X" && sq5.innerText == "X" && sq8.innerText == "X") {
      		alert("Player 'X' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq3.innerText == "X" && sq6.innerText == "X" && sq9.innerText == "X") {
      		alert("Player 'X' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq1.innerText == "X" && sq5.innerText == "X" && sq9.innerText == "X") {
      		alert("Player 'X' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq3.innerText == "X" && sq5.innerText == "X" && sq7.innerText == "X") {
      		alert("Player 'X' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq1.innerText == "O" && sq2.innerText == "O" && sq3.innerText == "O") {
      		alert("Player 'O' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq4.innerText == "O" && sq5.innerText == "O" && sq6.innerText == "O") {
      		alert("Player 'O' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq7.innerText == "O" && sq8.innerText == "O" && sq9.innerText == "O") {
      		alert("Player 'O' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq1.innerText == "O" && sq4.innerText == "O" && sq7.innerText == "O") {
      		alert("Player 'O' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq2.innerText == "O" && sq5.innerText == "O" && sq8.innerText == "O") {
      		alert("Player 'O' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq3.innerText == "O" && sq6.innerText == "O" && sq9.innerText== "O") {
      		alert("Player 'O' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq1.innerText == "O" && sq5.innerText == "O" && sq9.innerText == "O") {
      		alert("Player 'O' wins! Press OK to reset game");
      		reset();
    	}
    	else if (sq3.innerText == "O" && sq5.innerText == "O" && sq7.innerText == "O") {
      		alert("Player 'O' wins! Press OK to reset game");
      		reset();
    	}
    	else {
    		checkStalemate();
    	}
  	}

	function checkStalemate() {
  		if (sq1.innerText != "" && sq2.innerText != "" && sq3.innerText != "" && sq4.innerText != "" && sq5.innerText != "" && sq6.innerText != "" && sq7.innerText != "" && sq8.innerText != "" && sq9.innerText != "") {
  			alert("Stalemate, press OK to try again");
  			reset();
  		}
 	}

});