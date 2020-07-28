const keypad = document.getElementById('keypadDiv');
const btns = keypad.getElementsByClassName("btn");
const ans = document.getElementById('answer');
const operatorDiv = document.getElementById('operatorDiv');
const operatorBtns = operatorDiv.getElementsByClassName("btn");
const difficultyDiv = document.getElementById('difficultyDiv');
const difficultyBtns = difficultyDiv.getElementsByClassName("btn");
const goBtn = document.getElementById('go');
let solution;
let activeOp;
let activeDiff;

//// Show and hide anwser response
const correctModal = document.getElementById('correctModal');
const incorrectModal = document.getElementById('incorrectModal');
const correctContinueButton = document.getElementById('correctContinueButton');
const incorrectContinueButton = document.getElementById('incorrectContinueButton');
const overlay = document.getElementById('overlay');


                ////////        Page Functions       ////////

/// Creates a math equation to solve
function setEquation(difficulty, operator){

  ans.value = '';
  ans.focus();

  var oper = document.getElementById('operator');
  var num1 = document.getElementById('numOne');
  var num2 = document.getElementById('numTwo');
  var answerLength;
  var number1 = Math.round(Math.random()*difficulty);
  var number2 = Math.round(Math.random()*difficulty);

  oper.innerHTML = operator;
//  num1.innerHTML = number1;
//  num2.innerHTML = number2;

  switch (operator) {
      case '+':
        num1.innerHTML = number1;
        num2.innerHTML = number2;
        solution = number1 + number2;
        break;
      case '-':
        if(number2 > number1){
          var numSwitch = number2;
          number2 = number1;
          number1 = numSwitch;
          num1.innerHTML = number1;
          num2.innerHTML = number2;
          solution = number1 - number2;
          break;
        }else if (number1 === number2){
          number1 += 1;
          num1.innerHTML = number1;
          num2.innerHTML = number2;
          solution = number1 - number2;
          break;
        }else {
          num1.innerHTML = number1;
          num2.innerHTML = number2;
          solution = number1 - number2;
          break;
        }
      case '*':
        num1.innerHTML = number1;
        num2.innerHTML = number2;
        solution = number1 * number2;
        break;
      case '/':
      //To Do: Insure neither number can be zero and answer is whole number
      if(number2 > number1){
          var numSwitch = number2;
          number2 = number1;
          number1 = numSwitch;
          num1.innerHTML = number1;
          num2.innerHTML = number2;
//          solution = number1 - number2;
          break;
        }else if (number1 === number2){
          number1 += 1;
          num1.innerHTML = number1;
          num2.innerHTML = number2;
          solution = number1 - number2;
          break;
        }else {
          num1.innerHTML = number1;
          num2.innerHTML = number2;
          solution = number1 - number2;
          break;
        }
//        var diff = difficulty/3;
//        number1 = Math.round(Math.random()*diff)+1;
//      console.log(diff);
//        number2 = Math.round(Math.random()*diff)+1;
//        num1.innerHTML = number1;
//        num2.innerHTML = number2;
//        solution = number1 / number2;
//        break;
  }
  answerLength = Math.log(solution) * Math.LOG10E + 1 | 0;
  ans.maxLength = answerLength;
}

//Set page state
function setPageState(btns1, btns2){

  //Sets math operation
  for (var i = 0; i < btns1.length; i++){
    if (btns1[i].classList.contains('active')){
      activeOp = btns1[i].value;
    }
  }

  //Sets math difficuty
  for (var i = 0; i < btns2.length; i++){
    if (btns2[i].classList.contains('active')){
      var activeDiffId = btns2[i].id;
      switch (activeDiffId) {
        case 'singleDigit':
          activeDiff = 9;
          break;
        case 'doubleDigit':
          activeDiff = 99;
          break;
        case 'tripleDigit':
          activeDiff = 999;
      }
    }
  }
  setEquation(activeDiff, activeOp);

}




                        /////////     Button Handlers      /////////

//Event listener for keypad, only applies to keypadDiv
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    ans.value += this.value;
    ans.focus();
  });
}


// Checks answer against solution onclick of go button
goBtn.addEventListener("click", function (){
  //introduce regex for number validation
  var ansREGX = /^[0-9]+$/;
  if(ansREGX.test(ans.value)){
    if (ans.value === solution.toString()){
      modalMessage.innerHTML = "Good job!";
      modal.style.display = "block";
      currentPlayer.mathPoints += 1;
      localStorage.setItem('players', JSON.stringify(players));
      displayPoints(currentPlayer);
      console.log(currentPlayer);
      setPageState(operatorBtns, difficultyBtns);
    } else {
      modalMessage.innerHTML = "Try again!";
      modal.style.display = "block";
      ans.value ='';
      ans.focus();
      }
  } else {
      modalMessage.innerHTML = "Numbers only here!";
      modal.style.display = "block";
      ans.value ='';
      ans.focus();
  }
})


//Sets active class to selected operator buttons
  for (var i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", function() {
      var current = operatorDiv.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      activeOp = this.value;
      setPageState(operatorBtns, difficultyBtns);
    });
  }


//Sets active class to selected difficulty buttons
  for (var i = 0; i < difficultyBtns.length; i++) {
    difficultyBtns[i].addEventListener("click", function() {
      var current = difficultyDiv.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      var activeDiffId = this.id;
      switch (activeDiffId) {
        case 'singleDigit':
          activeDiff = 9;
          break;
        case 'doubleDigit':
          activeDiff = 99;
          break;
        case 'tripleDigit':
          activeDiff = 999;
      }
      setPageState(operatorBtns, difficultyBtns);
    });
  }


//Run Start
setPageState(operatorBtns, difficultyBtns);
