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

function createRusList(list) {
  list = [...myDictionary].sort((a, b) => {
    return a.rus.localeCompare(b.rus, 'ru');
  });

  for (let i = 0; i < list.length; i++) {
    let firstLetter = list[i].rus[0].toLowerCase();
    let previousFirstLetter = i!==0?list[i-1].rus[0].toLowerCase():1;

    if (firstLetter !== previousFirstLetter) {
      listOfWords.innerHTML += `
        <li class='big-letter'>
          <span>${list[i].rus[0]}</span>
        </li>
      `;
    }

    listOfWords.innerHTML += `
      <li>
        <a href='./index.html?index=${list[i].index}'>
          <span>${list[i].rus}</span>
          <span>${list[i].heb}</span>
        </a>
      </li>
    `;
  }
}

function createHebList(list) {
  list = [...myDictionary].sort((a, b) => {
    return a.heb.localeCompare(b.heb, 'he');
  });

  for (let i = 0; i < list.length; i++) {
    let firstLetter = list[i].heb[0].toLowerCase();
    let previousFirstLetter = i!==0?list[i-1].heb[0].toLowerCase():1;

    if (firstLetter !== previousFirstLetter) {
      listOfWords.innerHTML += `
        <li class='big-letter'>
          <span>${list[i].heb[0]}</span>
        </li>
      `;
    }

    listOfWords.innerHTML += `
      <li class='hebrew'>
        <a href='./index.html?index=${list[i].index}'>
          <span>${list[i].rus}</span>
          <span>${list[i].heb}</span>
        </a>
      </li>
    `;
  }
}

listOfWords.innerHTML = ''; // reset
createRusList(alhabeticalArrayRus);

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
    createRusList(alhabeticalArrayRus);
  } else if(this.querySelector('.heb').classList.contains('active')) {
    createHebList(alhabeticalArrayHeb);
  }
}