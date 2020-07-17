const wordDiv = document.getElementById('wordDiv');
const inputLetter = document.getElementById('wordDiv');
const checkAnswer = document.getElementById('checkAnswer');
const threeLetWords = ['hat', 'cat', 'dog', 'sun', 'pig', 'cow', 'cup', 'bat', 'ant', 'rat', 'egg', 'owl', 'car'];
const threeLetImgs = ['hat.svg', 'cat.svg', 'dog.svg', 'sun.svg', 'pig.svg', 'cow.svg', 'cup.svg', 'bat.svg', 'ant.svg', 'rat.svg', 'egg.svg', 'owl.svg', 'car.svg'];
var wordIndex = Math.round(Math.random()*(threeLetWords.length-1));
var wordChoice = '';
const imgs = [];


wordChoice = threeLetWords[wordIndex];


var img = document.createElement("img");
img.src = 'svg/' + threeLetImgs[wordIndex];
img.style.height = '80%';
img.style.width = '80%';
const picture = document.getElementById('imgDiv');
picture.appendChild(img);



var word = wordChoice;
var wordArray = [];
var letterToRemove = Math.round(Math.random()*(word.length-1));

function createWord () {
  
  for (var i = 0; i < word.length; i++) {
    wordArray.push(word.charAt(i));
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
  input.focus();
}

createWord();

var answer = wordArray[letterToRemove];

//console.log(answer);

checkAnswer.addEventListener("click", () =>{
  var input = document.getElementById('input');
  if(input.value === answer){
    console.log('Good');
  } else {
    console.log('oops');
  }
}); 
