const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnStart = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const scoreboard = document.querySelectorAll('.tries img'); // Selectează inimile

let missed = 0;

const phrases = [
'the quick brown fox',
'hello world',
'javascript is fun',
'open seasame',
'coding is amazing'
];

btnStart.addEventListener('click', () => {
overlay.style.display = 'none';



});

function getRandomPhraseAsArray (arr) {
const randomArr = Math.floor(Math.random() * arr.length);
const randomPhrase = arr[randomArr];
const characterArray=randomPhrase.split('');
return characterArray;

}

function addPhraseToDisplay(arr) {
for ( let i =0; i<arr.length;i++){
    const listItem = document.createElement('li');
    listItem.textContent =arr[i];
if(arr[i] !== ' '){
    listItem.classList.add('letter');
}else{
    listItem.classList.add('space');
}
ul.appendChild(listItem);
}
}

function checkLetter(button){
const letters = document.querySelectorAll('.letter');
let letterFound = null;

for(let i=0; i<letters.length;i++){
    if(letters[i].textContent.toLowerCase() === button.textContent.toLowerCase()){
        letters[i].classList.add('show');
        letterFound = button.textContent.toLowerCase();
    }
}
return letterFound;
}


qwerty.addEventListener('click', (e) => {
if(e.target.tagName === 'BUTTON'){
const button = e.target;
button.classList.add('chosen');
button.disabled= true;
const letterFound = checkLetter(button);
if(letterFound === null){
    missed ++;
    scoreboard[missed -1].src = 'images/lostHeart.png';
    if(missed === 5){
        overlay.style.display ='flex';
        overlay.className='lose';
        overlay.querySelector('h2').textContent = 'You lost! Try again';
        btnStart.textContent= 'Restart Game';
    }
}
    checkWin();

}
});
function checkWin() {
const letters = document.querySelectorAll('.letter');
const shownLetters = document.querySelectorAll('.show');

if(letters.length === shownLetters.length){
    overlay.className = 'win';
    overlay.textContent = 'Congratulations! You Won!';
    overlay.style.display='flex';
    overlay.style.fontSize = '60px';
} else if(missed >=5){
overlay.className = 'lose';
overlay.textContent = 'Sorry, you lost! Try again.';
overlay.style.display = 'flex';
    overlay.style.fontSize = '60px';

}
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);