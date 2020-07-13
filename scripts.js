const mathBtn = document.getElementById('mathBtn');
const mathContainer = document.getElementById('mathContainer');

const missingLetterBtn = document.getElementById('missingLetterBtn');
const missingLetterContainer = document.getElementById('missingLetterDiv');

const sightWordsBtn = document.getElementById('sightWordsBtn');
const sightWordsContainer = document.getElementById('sightWordsDiv');

const widgetControl = document.getElementById('widgetControl');
const widgetBtns = widgetControl.getElementsByClassName('btn');


//add widget container to group all widgets for a loop to call active
mathBtn.addEventListener("click", ()=> {
  mathContainer.classList.remove('d-none');
  mathContainer.classList.add('d-inline-flex');
  missingLetterContainer.classList.remove('d-inline-flex');
  missingLetterContainer.classList.add('d-none');
  sightWordsContainer.classList.remove('d-inline-flex');
  sightWordsContainer.classList.add('d-none');
});

missingLetterBtn.addEventListener("click", ()=> {
  missingLetterContainer.classList.remove('d-none');
  missingLetterContainer.classList.add('d-inline-flex');
  mathContainer.classList.remove('d-inline-flex');
  mathContainer.classList.add('d-none');
  sightWordsContainer.classList.remove('d-inline-flex');
  sightWordsContainer.classList.add('d-none');
});

sightWordsBtn.addEventListener("click", ()=> {
  sightWordsBtn.classList.remove('d-none');
  sightWordsBtn.classList.add('d-inline-flex');
  mathContainer.classList.remove('d-inline-flex');
  mathContainer.classList.add('d-none');
  missingLetterContainer.classList.remove('d-inline-flex');
  missingLetterContainer.classList.add('d-none');
});


for (var i = 0; i < widgetBtns.length; i++) {
  widgetBtns[i].addEventListener("click", function() {
    var current = widgetControl.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log(this);
  });
}
console.log(widgetBtns);