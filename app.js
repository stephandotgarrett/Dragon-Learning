//javascript will go here!
onst num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const input = document.getElementById('answer');
const ans = document.getElementById('answer').value;
const response = document.getElementById('response');
var difficulty = null;
let numOne = Math.round(Math.random()*difficulty);
let numTwo = Math.round(Math.random()*difficulty);
// let startSelection = document.getElementById('singleDigitMath');
// startSelection.classList += " active";

//Button Managment

// Add active class to the current button (highlight it)
var difficultySelectionDiv = document.getElementById("difficultySelection");
var btns = difficultySelectionDiv.getElementsByClassName("difficultyButton");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

  });
}



//Addition Scripts
c
const answer = numOne + numTwo;


num1.innerHTML = numOne;
num2.innerHTML = numTwo;

//Allows user to press enter to input math answer
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.getElementById("go").click();
  }
});

function getInputValue(){
  const ans = document.getElementById('answer').value;
  if (ans == answer) {
    response.innerHTML = "Yay!";
  } else {
    response.innerHTML = "Oh no!";
  }
};
