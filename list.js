import { myDictionaryFull } from '/myDictionaryApp/dictionary.js';
// import { myDictionaryFull } from '/dictionary.js';

// initial full dictionary
let myDictionary = myDictionaryFull;

for (let i=0; i<myDictionary.length; i++) {
  myDictionary[i].index = i;
}

let alhabeticalArrayHeb = [];
let alhabeticalArrayRus = [];

const listOfWords = document.querySelector("#listOfWords");

function createRusList() {
  if(alhabeticalArrayRus.length === 0) {
      alhabeticalArrayRus = [...myDictionary].sort((a, b) => {
      return a.rus.localeCompare(b.rus, 'ru');
    });
  }
  

  for (let i = 0; i < alhabeticalArrayRus.length; i++) {
    let firstLetter = alhabeticalArrayRus[i].rus[0].toLowerCase();
    let previousFirstLetter = i!==0?alhabeticalArrayRus[i-1].rus[0].toLowerCase():1;

    if (firstLetter !== previousFirstLetter) {
      listOfWords.innerHTML += `
        <li class='big-letter'>
          <span>${alhabeticalArrayRus[i].rus[0]}</span>
        </li>
      `;
    }

    listOfWords.innerHTML += `
      <li>
        <a href='./index.html?index=${alhabeticalArrayRus[i].index}'>
          <span>${alhabeticalArrayRus[i].rus}</span>
          <span>${alhabeticalArrayRus[i].heb}</span>
        </a>
      </li>
    `;
  }
}

function createHebList() {
  if(alhabeticalArrayHeb.length === 0) {
    alhabeticalArrayHeb = [...myDictionary].sort((a, b) => {
      return a.heb.localeCompare(b.heb, 'he');
    });
  }

  for (let i = 0; i < alhabeticalArrayHeb.length; i++) {
    let firstLetter = alhabeticalArrayHeb[i].heb[0].toLowerCase();
    let previousFirstLetter = i!==0?alhabeticalArrayHeb[i-1].heb[0].toLowerCase():1;

    if (firstLetter !== previousFirstLetter) {
      listOfWords.innerHTML += `
        <li class='big-letter'>
          <span>${alhabeticalArrayHeb[i].heb[0]}</span>
        </li>
      `;
    }

    listOfWords.innerHTML += `
      <li class='hebrew'>
        <a href='./index.html?index=${alhabeticalArrayHeb[i].index}'>
          <span>${alhabeticalArrayHeb[i].rus}</span>
          <span>${alhabeticalArrayHeb[i].heb}</span>
        </a>
      </li>
    `;
  }
}

listOfWords.innerHTML = ''; // reset
createRusList();

////////////////////
//    switcher    //
////////////////////
const switcher = document.querySelector('.switcher');
switcher.addEventListener("click", switchList);

function switchList() {
  this.querySelector('.rus').classList.toggle('active');
  this.querySelector('.heb').classList.toggle('active');

  listOfWords.innerHTML = ''; // reset

  if(this.querySelector('.rus').classList.contains('active')) {
    createRusList();
  } else if(this.querySelector('.heb').classList.contains('active')) {
    createHebList();
  }
}