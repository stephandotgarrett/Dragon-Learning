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
//localStorage.setItem('players', JSON.stringify(players));


//creates new player
function newPlayer (name){
  console.log(typeof(name));
  var nameREGX = /^[A-Za-z0-9]+$/;
  if(name ===  ""){
    console.log("Please create a username");
  }else if (nameREGX.test(name)){
        if(JSON.parse(window.localStorage.getItem('players')) !== null){
              players = JSON.parse(window.localStorage.getItem('players'));
          console.log(players);
              var activePlayers = [];
                  for(var i = 0; i < players.length; i++){
                      if (players[i].name === name){
                         activePlayers.push(name);
                      } else {}
                  }
              if(activePlayers.length > 0){
//                var newModal = document.createElement('div');
//                widgetSpace.appendChild(newModal);
//                newModal.classList.add("modal");
//                newModal.classList.add('active ');
////                overlay.classList.add('active');
//                newModal.id = "newModal";
//                var newModalDiv = document.getElementById('newModal');
//                var modalMessage = document.createElement('div');
//                modalMessage.innerHTML = 'Thats username is already taken, please create a unique username';
//                var modalButton = document.createElement('button');
//                modalButton.innerHTML = 'Submit';
//                newModalDiv.appendChild(modalMessage);
//                newModalDiv.appendChild(modalButton);
//                showModal();
                
                console.log('This user id is already taken, you must create a unique id.');
              }else{
                var player = new Player(name, 0, 0, 0);
                players.push(player);
                localStorage.setItem('players', JSON.stringify(players));
                welcome.innerHTML = `Welcome ${player.name}!`
                mathPointsDiv.innerHTML = `Math Points: ${player.mathPoints}`
                loginDiv.classList.remove('d-flex');
                loginDiv.classList.add('d-none');
                widgetContainer.classList.remove('d-none');
                widgetContainer.classList.add('d-flex');
                widgetControl.classList.remove('d-none');
                widgetControl.classList.add('d-flex');
                console.log(name);
              }
         }else{
               var player = new Player(name, 0, 0, 0);
               players.push(player);
               localStorage.setItem('players', JSON.stringify(players));
               welcome.innerHTML = `Welcome ${player.name}!`
               mathPointsDiv.innerHTML = `Math Points: ${player.mathPoints}`
               loginDiv.classList.remove('d-flex');
               loginDiv.classList.add('d-none');
               widgetContainer.classList.remove('d-none');
               widgetContainer.classList.add('d-flex');
               widgetControl.classList.remove('d-none');
               widgetControl.classList.add('d-flex');
               console.log(name);
         }
  }else{
    console.log('numbers and letters only');
  }
}

Player('Stephan');
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
  newPlayer(newPlayerInput.value); //creates new player with scores set at 0

});


function updateMathScore (name){
 for (var i = 0; i < players.length; i++){
   if (name === players[i].name){
     players[i].mathPoints += 1;
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
//const modal = document.getElementById('modal');
const modalResponse = document.getElementById('modalResponse');

function showModal() {
  modal.classList.add('active');
  overlay.classList.add('active');
}

//modalButton.addEventListener("click", () => {
//  correctModal.classList.remove('active');
//});

//correctContinueButton.addEventListener("click", () => {
//  correctModal.classList.remove('active');
//  overlay.classList.remove('active');
////  ans.focus();
//});
//
//incorrectContinueButton.addEventListener("click", () => {
//  incorrectModal.classList.remove('active');
//  overlay.classList.remove('active');
////  ans.focus();
//});


/// widget button display controls

const homeBtn = document.getElementById('homeBtn');

const mathBtn = document.getElementById('mathBtn');
const mathContainer = document.getElementById('mathContainer');

const missingLetterBtn = document.getElementById('missingLetterBtn');
const missingLetterContainer = document.getElementById('missingLetterDiv');

const sightWordsBtn = document.getElementById('sightWordsBtn');
const sightWordsContainer = document.getElementById('sightWordsDiv');

const logoutBtn = document.getElementById('logoutBtn');

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
  modal.style.display = "block";
  modalMessage.innerHTML = "Player already Exsists";
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

