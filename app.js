//javascript will go here!

//Addition Scripts
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const input = document.getElementById('answer');
const ans = document.getElementById('answer').value;
const response = document.getElementById('response');
const easy = 5;
const numOne = Math.round(Math.random()*easy);
const numTwo = Math.round(Math.random()*easy);
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
