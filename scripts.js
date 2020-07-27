const newPlayerInput = document.getElementById('newName');
const newPlayerSubmit = document.getElementById('newPlayerBtn');
const start = document.getElementById('start');
const welcome = document.getElementById('welcome');
const mathPointsDiv = document.getElementById('mathPointsDiv');
const mlPointsDiv = document.getElementById('mlPointsDiv');
const swPointsDiv = document.getElementById('swPointsDiv');
const widgetControl = document.getElementById('widgetControl');
const widgetBtns = widgetControl.getElementsByClassName('btn');
const loginDiv = document.getElementById('loginDiv');
const widgetContainer = document.getElementById('widgetContainer');
const widgets = widgetContainer.getElementsByClassName('widget');
const widgetSpace = document.getElementById('widgetSpace');

//new player contructor
function Player (name, mathPoints, mLPoints, sWPoints) {
 this.name = name;
 this.mathPoints = mathPoints;
 this.mLPoints = mLPoints;
 this.sWPoints = sWPoints;
}

//array to store player info
var players = [];

var currentPlayer;
//localStorage.setItem('players', JSON.stringify(players));


function displayWidgets (){
   loginDiv.classList.remove('d-flex');
   loginDiv.classList.add('d-none');
   widgetContainer.classList.remove('d-none');
   widgetContainer.classList.add('d-flex');
   widgetControl.classList.remove('d-none');
   widgetControl.classList.add('d-flex');
}

//creates new player
function newPlayer (name){
  console.log(typeof(name));
  var nameREGX = /^[A-Za-z0-9]+$/;
  if(name ===  ""){
    modalMessage.innerHTML = "Please create a username";
    modal.style.display = "block";
  }else if (nameREGX.test(name)){
        if(JSON.parse(window.localStorage.getItem('players')) !== null){
              players = JSON.parse(window.localStorage.getItem('players'));
              var activePlayers = [];
                  for(var i = 0; i < players.length; i++){
                      if (players[i].name === name){
                         activePlayers.push(name);
                      } else {}
                  }
              if(activePlayers.length > 0){
                modalMessage.innerHTML = "This user id is already taken, you must create a unique id.";
                modal.style.display = "block";
              }else{
                var player = new Player(name, 0, 0, 0);
                players.push(player);
                localStorage.setItem('players', JSON.stringify(players));
                currentPlayer = player;
                displayWidgets();
                welcome.innerHTML = `Welcome ${currentPlayer.name}!`
                mathPointsDiv.innerHTML = `Math Points: ${currentPlayer.mathPoints}`
                mlPointsDiv.innerHTML = `Missing Letter Points: ${currentPlayer.mLPoints}`
                swPointsDiv.innerHTML = `Sight Words Points: ${currentPlayer.sWPoints}`
              }
         }else{
               var player = new Player(name, 0, 0, 0);
               players.push(player);
               localStorage.setItem('players', JSON.stringify(players));
               currentPlayer = player;
               displayWidgets();
               welcome.innerHTML = `Welcome ${currentPlayer.name}!`
               mathPointsDiv.innerHTML = `Math Points: ${currentPlayer.mathPoints}`
               mlPointsDiv.innerHTML = `Missing Letter Points: ${currentPlayer.mLPoints}`
               swPointsDiv.innerHTML = `Sight Words Points: ${currentPlayer.sWPoints}`
         }
  }else{
    modalMessage.innerHTML = "Letters and numbers only here!";
    modal.style.display = "block";
  }
}


///// Returning player function
const returnName = document.getElementById('returnName');
const returningPlayerBtn = document.getElementById('returnPlayerBtn');

function returningPlayer (name) {
  if(JSON.parse(window.localStorage.getItem('players')) === null){
    modalMessage.innerHTML = "There are no exsisting players. Please create a unique id.";
    modal.style.display = "block";
  } else {
    players = JSON.parse(window.localStorage.getItem('players'));
    
    //var to store return input
    var returnName = name;
    
    //looks for returning player
    function isPlayer(player) {
        return player.name === returnName;
    }
    var returnPlayer = players.find(isPlayer);

    if (returnPlayer === undefined){
      modalMessage.innerHTML = "That user id doesn't exsist. Please create a unique id.";
      modal.style.display = "block";
    }else{
      currentPlayer = returnPlayer;
      console.log(returnPlayer);
      welcome.innerHTML = `Welcome ${currentPlayer.name}!`
      mathPointsDiv.innerHTML = `Math Points: ${currentPlayer.mathPoints}`
      mlPointsDiv.innerHTML = `Missing Letter Points: ${currentPlayer.mLPoints}`
      swPointsDiv.innerHTML = `Sight Words Points: ${currentPlayer.sWPoints}`
      displayWidgets();
    }
  }
}

returningPlayerBtn.onclick = function() {
  returningPlayer(returnName.value);
}


function updateMathScore (name){
 for (var i = 0; i < players.length; i++){
   if (name === players[i].name){
     console.log(name);
     players[i].mathPoints += 1;
     localStorage.setItem('players', JSON.stringify(players));
//     player1 = JSON.parse(window.localStorage.getItem('player1'));
//      console.log(player1);
   }
 }
}

//updateMathScore('Stephan');

// updateMathScore('Stephan');
//console.log(players[0]);



/// widget button display controls

const homeBtn = document.getElementById('homeBtn');

const mathBtn = document.getElementById('mathBtn');
const mathContainer = document.getElementById('mathContainer');

const missingLetterBtn = document.getElementById('missingLetterBtn');
const missingLetterContainer = document.getElementById('missingLetterDiv');

const sightWordsBtn = document.getElementById('sightWordsBtn');
const sightWordsContainer = document.getElementById('sightWordsDiv');

const logoutBtn = document.getElementById('logoutBtn');

for (var i = 0; i < widgetBtns.length; i++) {
  widgetBtns[i].addEventListener("click", function() {
    var current = widgetControl.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    switch(this.id) {
      case 'homeBtn':
        start.classList.remove('d-none');
        start.classList.add('d-flex');
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
        start.classList.remove('d-flex');
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
        start.classList.remove('d-flex');
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
        start.classList.remove('d-flex');
        start.classList.add('d-none');
        console.log('sightWordsBtn');
        break;
      case 'logoutBtn':
        location.reload();
        break;
    }
  });
}








// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalMessage = document.getElementById('modalMessage');

// When the user clicks the button, open the modal 
newPlayerSubmit.onclick = function() {
  newPlayer(newPlayerInput.value);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

