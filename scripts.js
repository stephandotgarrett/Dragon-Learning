const newPlayerInput = document.getElementById('newName');
const newPlayerSubmit = document.getElementById('newPlayerBtn');
const start = document.getElementById('start');
const welcome = document.getElementById('welcome');
const mathPointsDiv = document.getElementById('mathPointsDiv');
const widgetControl = document.getElementById('widgetControl');
const widgetBtns = widgetControl.getElementsByClassName('btn');
const loginDiv = document.getElementById('loginDiv');
const widgetContainer = document.getElementById('widgetContainer');
const widgets = widgetContainer.getElementsByClassName('widget');


//new player contructor
function Player (name, mathPoints, mLPoints, sWPoints) {
 this.name = name;
 this.mathPoints = mathPoints;
 this.mLPoints = mLPoints;
 this.sWPoints = sWPoints;
}

//array to store player info
var players = []

//creates new player
function newPlayer (name){
  var newName = new Player(name, 0, 0, 0);
  players.push(newName);
}

//newPlayer('Stephan');
//newPlayer('The Kid');

//var to store return input
const stephan = 'Stephan';

//looks for returning player
function isPlayer(player) {
  return player.name === stephan;
}
//var returnPlayer = players.find(isPlayer);

//do stuff with returning player info
//console.log(returnPlayer);

//
//save player
// window.localStorage.setItem('player1', JSON.stringify(players[0]));

//retrieve player
// var player1 = JSON.parse(window.localStorage.getItem('player1'));
//

newPlayerSubmit.addEventListener("click", () => {
  newPlayer(newPlayerInput.value);
  loginDiv.classList.remove('d-flex');
  loginDiv.classList.add('d-none');
  widgetContainer.classList.remove('d-none');
  widgetContainer.classList.add('d-flex');
  widgetControl.classList.remove('d-none');
  widgetControl.classList.add('d-flex');
//save player to local
//retrieve player from local
//display player info as if reurning player
  welcome.innerHTML = `Welcome ${players[0].name}!`
  mathPointsDiv.innerHTML = `Math Points: ${players[0].mathPoints}`
});




function updateMathScore (name){
 for (var i = 0; i < players.length; i++){
   if (name === players[i].name){
     players[i].mathPoints += 10;
     window.localStorage.setItem('player1', JSON.stringify(players[i]));
     player1 = JSON.parse(window.localStorage.getItem('player1'));
//      console.log(player1);
   }
 }
}

//updateMathScore('Stephan');

// updateMathScore('Stephan');
//console.log(players[0]);


///  display modal in response to user input
const correctResponse = document.getElementById('correctResponse');
const incorrectResponse = document.getElementById('incorrectResponse');

function showModal(modal) {
  modal.classList.add('active');
  overlay.classList.add('active');
}
correctContinueButton.addEventListener("click", () => {
  correctModal.classList.remove('active');
  overlay.classList.remove('active');
//  ans.focus();
});

incorrectContinueButton.addEventListener("click", () => {
  incorrectModal.classList.remove('active');
  overlay.classList.remove('active');
//  ans.focus();
});


/// widget button display controls

const homeBtn = document.getElementById('homeBtn');

const mathBtn = document.getElementById('mathBtn');
const mathContainer = document.getElementById('mathContainer');

const missingLetterBtn = document.getElementById('missingLetterBtn');
const missingLetterContainer = document.getElementById('missingLetterDiv');

const sightWordsBtn = document.getElementById('sightWordsBtn');
const sightWordsContainer = document.getElementById('sightWordsDiv');

//const widgetControl = document.getElementById('widgetControl');
//const widgetBtns = widgetControl.getElementsByClassName('btn');
//
//const widgetContainer = document.getElementById('widgetContainer');
//const widgets = widgetContainer.getElementsByClassName('widget');

for (var i = 0; i < widgetBtns.length; i++) {
  widgetBtns[i].addEventListener("click", function() {
    var current = widgetControl.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    switch(this.id) {
      case 'homeBtn':
        start.classList.remove('d-none');
        start.classList.add('d-inline-flex');
        sightWordsContainer.classList.remove('d-inline-flex');
        sightWordsContainer.classList.add('d-none');
        mathContainer.classList.remove('d-inline-flex');
        mathContainer.classList.add('d-none');
        missingLetterContainer.classList.remove('d-inline-flex');
        missingLetterContainer.classList.add('d-none');
        console.log('homeBtn');
        break;
      case 'mathBtn':
        mathContainer.classList.remove('d-none');
        mathContainer.classList.add('d-inline-flex');
        missingLetterContainer.classList.remove('d-inline-flex');
        missingLetterContainer.classList.add('d-none');
        sightWordsContainer.classList.remove('d-inline-flex');
        sightWordsContainer.classList.add('d-none');
        start.classList.remove('d-inline-flex');
        start.classList.add('d-none');
        console.log('mathBtn');
        break;
      case 'missingLetterBtn':
        missingLetterContainer.classList.remove('d-none');
        missingLetterContainer.classList.add('d-inline-flex');
        mathContainer.classList.remove('d-inline-flex');
        mathContainer.classList.add('d-none');
        sightWordsContainer.classList.remove('d-inline-flex');
        sightWordsContainer.classList.add('d-none');
        start.classList.remove('d-inline-flex');
        start.classList.add('d-none');
        console.log('missingLetterBtn');
        break;
      case 'sightWordsBtn':
        sightWordsContainer.classList.remove('d-none');
        sightWordsContainer.classList.add('d-inline-flex');
        mathContainer.classList.remove('d-inline-flex');
        mathContainer.classList.add('d-none');
        missingLetterContainer.classList.remove('d-inline-flex');
        missingLetterContainer.classList.add('d-none');
        start.classList.remove('d-inline-flex');
        start.classList.add('d-none');
        console.log('sightWordsBtn');
        break;
    }
  });
}



