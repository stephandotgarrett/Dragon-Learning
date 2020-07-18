

//function Player (name, mathPoints, mLPoints, sWPoints) {
//  this.name = name;
//  this.mathPoints = mathPoints;
//  this.mLPoints = mLPoints;
//  this.sWPoints = sWPoints;
//}
//
//var players = [
//  {name: 'Stephan',
//  mathPoints: 10,
//  mLPoints: 110,
//  sWPoints: 10},
//  {name: 'Joe',
//  mathPoints: 20,
//  mLPoints: 220,
//  sWPoints: 20}
//]
//
//var John = new Player('John', 0, 0, 0);
//players.push(John);
//console.log(players[2]);
//
//
//window.localStorage.setItem('player3', JSON.stringify(players[2]));
//var player3 = JSON.parse(window.localStorage.getItem('player3'));
//
//console.log(player3);
//
//window.localStorage.setItem('player1', JSON.stringify(players[0]));
//var player1 = JSON.parse(window.localStorage.getItem('player1'));
//
//window.localStorage.setItem('player2', JSON.stringify(players[1]));
//var player2 = JSON.parse(window.localStorage.getItem('player2'));
//
//
//function updateMathScore (name){
//  for (var i = 0; i < players.length; i++){
//    if (name === players[i].name){
//      players[i].mathPoints += 10;
//      window.localStorage.setItem('player1', JSON.stringify(players[i]));
//      player1 = JSON.parse(window.localStorage.getItem('player1'));
////      console.log(player1);
//    }
//  }
//}
//updateMathScore('Stephan');
//

const start = document.getElementById('start');
const homeBtn = document.getElementById('homeBtn');

const mathBtn = document.getElementById('mathBtn');
const mathContainer = document.getElementById('mathContainer');

const missingLetterBtn = document.getElementById('missingLetterBtn');
const missingLetterContainer = document.getElementById('missingLetterDiv');

const sightWordsBtn = document.getElementById('sightWordsBtn');
const sightWordsContainer = document.getElementById('sightWordsDiv');

const widgetControl = document.getElementById('widgetControl');
const widgetBtns = widgetControl.getElementsByClassName('btn');

const widgetContainer = document.getElementById('widgetContainer');
const widgets = widgetContainer.getElementsByClassName('widget');
//console.log(widgets);
//console.log(widgetBtns);
//Repurpose as widget div display selector
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


////add widget container to group all widgets for a loop to call active
//homeBtn.addEventListener("click", ()=> {
//  start.classList.remove('d-none');
//  start.classList.add('d-flex');
//  sightWordsContainer.classList.remove('d-inline-flex');
//  sightWordsContainer.classList.add('d-none');
//  mathContainer.classList.remove('d-inline-flex');
//  mathContainer.classList.add('d-none');
//  missingLetterContainer.classList.remove('d-inline-flex');
//  missingLetterContainer.classList.add('d-none');
//  
//});
//
//mathBtn.addEventListener("click", ()=> {
//  mathContainer.classList.remove('d-none');
//  mathContainer.classList.add('d-inline-flex');
//  missingLetterContainer.classList.remove('d-inline-flex');
//  missingLetterContainer.classList.add('d-none');
//  sightWordsContainer.classList.remove('d-inline-flex');
//  sightWordsContainer.classList.add('d-none');
//  start.classList.remove('d-flex');
//  start.classList.add('d-none');
//});
//
//missingLetterBtn.addEventListener("click", ()=> {
//  missingLetterContainer.classList.remove('d-none');
//  missingLetterContainer.classList.add('d-inline-flex');
//  mathContainer.classList.remove('d-inline-flex');
//  mathContainer.classList.add('d-none');
//  sightWordsContainer.classList.remove('d-inline-flex');
//  sightWordsContainer.classList.add('d-none');
//  start.classList.remove('d-flex');
//  start.classList.add('d-none');
//});
//
//sightWordsBtn.addEventListener("click", ()=> {
//  sightWordsContainer.classList.remove('d-none');
//  sightWordsContainer.classList.add('d-inline-flex');
//  mathContainer.classList.remove('d-inline-flex');
//  mathContainer.classList.add('d-none');
//  missingLetterContainer.classList.remove('d-inline-flex');
//  missingLetterContainer.classList.add('d-none');
//  start.classList.remove('d-flex');
//  start.classList.add('d-none');
//});



