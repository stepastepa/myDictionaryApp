import { myDictionaryFull } from '/myDictionaryApp/dictionary.js';
// import { myDictionaryFull } from '/dictionary.js';

// initial full dictionary
let myDictionary = myDictionaryFull;

for (let i=0; i<myDictionary.length; i++) {
  myDictionary[i].index = i;
}

let alhabeticalArray = [];

let listOfWords = document.querySelector("#listOfWords");

listOfWords.innerHTML = ''; // reset

alhabeticalArray = [...myDictionary].sort((a, b) => {
  return a.rus.localeCompare(b.rus, 'ru');
});

function createList(list) {
  for (let i = 0; i < list.length; i++) {
    let firstLetter = alhabeticalArray[i].rus[0].toLowerCase();
    let previousFirstLetter = i!==0?alhabeticalArray[i-1].rus[0].toLowerCase():1;

    if (firstLetter !== previousFirstLetter) {
      listOfWords.innerHTML += `
        <li class='big-letter'>
          <span>${alhabeticalArray[i].rus[0]}</span>
        </li>
      `;
    }

    listOfWords.innerHTML += `
      <li>
        <a href='./index.html?index=${alhabeticalArray[i].index}'>
          <span>${alhabeticalArray[i].rus}</span>
          <span>${alhabeticalArray[i].heb}</span>
        </a>
      </li>
    `;
  }
}

createList(alhabeticalArray);