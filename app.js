//javascript will go here!


//Button Managment
//const difficultyButton = document.getElementsByClassName('difficultyButton');
//
//difficultyButton.addEventListener("click", (e) => {
//  e.target.remove('difficultyButton');
//  e.target.add('difficultyButtonSelected');
//});

function buttonChange() {
  const difficultyButton = document.getElementById('singleDigitMath');
  difficultyButton.classList.remove('difficultyButton');
  difficultyButton.classList.add('difficultyButtonSelected');
}

//function changeClass(id)
//{
//    if ($('#' + id).hasClass('difficultyButton'))
//        $('#' + id).removeClass('difficultyButton'),
//        $('#' + id).addClass('difficultyButtonSelected');
//    else
//    {
//        console.log('error');      
//    }
//}


//Addition Scripts
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const input = document.getElementById('answer');
const ans = document.getElementById('answer').value;
const response = document.getElementById('response');
var difficulty = null;
difficulty = 5;
const numOne = Math.round(Math.random()*difficulty);
const numTwo = Math.round(Math.random()*difficulty);
const answer = numOne + numTwo;


num1.innerHTML = numOne;
num2.innerHTML = numTwo;


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
