const wordDiv = document.getElementById('wordDiv');
const inputLetter = document.getElementById('wordDiv');
const checkAnswer = document.getElementById('checkAnswer');
const threeLetWords = ['hat', 'cat', 'dog', 'sun', 'pig', 'cow', 'cup', 'bat', 'ant', 'rat', 'egg', 'owl', 'car'];
const threeLetImgs = ['hat.svg', 'cat.svg', 'dog.svg', 'sun.svg', 'pig.svg', 'cow.svg', 'cup.svg', 'bat.svg', 'ant.svg', 'rat.svg', 'egg.svg', 'owl.svg', 'car.svg'];
var answer;





function createWord () {
  var wordIndex;
  var wordChoice = '';
  var imgs = [];
  var letterToRemove;
  var wordArray = [];
  wordIndex = Math.round(Math.random()*(threeLetWords.length-1));
  wordChoice = threeLetWords[wordIndex];
  letterToRemove = Math.round(Math.random()*(wordChoice.length-1));
  var img = document.createElement("img");
  img.src = 'svg/' + threeLetImgs[wordIndex];
  img.style.height = '80%';
  img.style.width = '80%';
  var picture = document.getElementById('imgDiv');
  picture.appendChild(img);

  for (var i = 0; i < wordChoice.length; i++) {
    wordArray.push(wordChoice.charAt(i));
    var char = wordArray[i];
    if (char === wordArray[letterToRemove]){
      var newI = document.createElement('input');
      newI.id = 'input';
      wordDiv.appendChild(newI);
    } else if (char !== wordArray[letterToRemove]){
      var newP = document.createElement('P');
      newP.innerHTML = wordArray[i];
      newP.classList.add('letter');
      wordDiv.appendChild(newP);
    } else {
      console.log(wordArray[letterToRemove]);
    }
  }
  answer = wordArray[letterToRemove];
//  input.focus();
}


  
createWord();

const modalButton = document.getElementById('modalButton');
///  evaluates user input, removes word and creates new word if answer is correct, clears input and returns to word if user input is incorrect
checkAnswer.addEventListener("click", () =>{
  var missInput = document.getElementById('input');
  if(missInput.value === answer){
    modal.innerHTML = "Good job!";
    showModal();
    modalButton.focus();
    removeAllChildNodes(wordDiv);
    removeAllChildNodes(imgDiv);
    createWord();
  } else {
//    incorrectResponse.innerHTML = "Try again!";
    showModal("Try again!");
    modalButton.focus();
    input.value = '';
    input.focus();
  }
}); 


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



// <div class="modal-correct" id="correctModal">
//                <div id="correctResponse"></div>
//                <button id="correctContinueButton">Continue</button>
//              </div>
//              
//              <div class="modal-incorrect" id="incorrectModal">
//                <div id="incorrectResponse"></div>
//                <button id="incorrectContinueButton">Continue</button>
//              </div>
