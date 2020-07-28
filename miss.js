const wordDiv = document.getElementById('wordDiv');
const inputLetter = document.getElementById('wordDiv');
const checkAnswer = document.getElementById('checkAnswer');
const threeLetWords = ['hat', 'cat', 'dog', 'sun', 'pig', 'cow', 'cup', 'bat', 'ant', 'rat', 'egg', 'owl', 'car'];
const threeLetImgs = ['hat.svg', 'cat.svg', 'dog.svg', 'sun.svg', 'pig.svg', 'cow.svg', 'cup.svg', 'bat.svg', 'ant.svg', 'rat.svg', 'egg.svg', 'owl.svg', 'car.svg'];
var answer;


//Get word from list of words and display the letters
function createWord () {
  //holds random number
  var wordIndex;
  //holds word from word array
  var wordChoice = '';
  //holds the letter to be removed from word
  var letterToRemove;
  //holds the character array created from the word
  var wordArray = [];
  //create random number for word array index used to pick a word
  wordIndex = Math.round(Math.random()*(threeLetWords.length-1));
  //pick word from threeLetWords array
  wordChoice = threeLetWords[wordIndex];
  //pick a letter to remove from word
  letterToRemove = Math.round(Math.random()*(wordChoice.length-1));
  //create img element to display image
  var img = document.createElement("img");
  //chooses image associated with the word chosen
  img.src = 'svg/' + threeLetImgs[wordIndex];
  //set img size
  img.style.height = '80%';
  img.style.width = '80%';
  //set img into imgDiv
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
}



createWord();


const modalButton = document.getElementById('modalButton');
///  evaluates user input, removes word and creates new word if answer is correct, clears input and returns to word if user input is incorrect
checkAnswer.addEventListener("click", () =>{
  var missInput = document.getElementById('input');
  if(missInput.value === answer){
    modalMessage.innerHTML = "Good job!";
    modal.style.display = "block";
    currentPlayer.mLPoints += 1;
    localStorage.setItem('players', JSON.stringify(players));
    displayPoints(currentPlayer);
    removeAllChildNodes(wordDiv);
    removeAllChildNodes(imgDiv);
    createWord();
  } else {
    modalMessage.innerHTML = "Try again!";
    modal.style.display = "block";
    input.value = '';
    input.focus();
  }
});

//clears exsisting word display to prep for new word display
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

