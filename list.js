import { myDictionaryFull } from '/myDictionaryApp/dictionary.js';
// import { myDictionaryFull } from '/dictionary.js';

// initial full dictionary
let myDictionary = myDictionaryFull;

for (let i=0; i<myDictionary.length; i++) {
  myDictionary[i].index = i;
}

let alhabeticalArrayHeb = [];
let alhabeticalArrayRus = [];

const rusList = document.querySelector("#lists #rusList");
const hebList = document.querySelector("#lists #hebList");

function createRusList() {
  const fragment = document.createDocumentFragment(); // temp fragment for long list of elements

  if(alhabeticalArrayRus.length === 0) {
      alhabeticalArrayRus = [...myDictionary].sort((a, b) => {
      return a.rus.localeCompare(b.rus, 'ru');
    });
  }

  if (rusList.getElementsByTagName("li").length > 0) return; // cancel

  for (let i = 0; i < alhabeticalArrayRus.length; i++) {
    let firstLetter = alhabeticalArrayRus[i].rus[0].toLowerCase();
    let previousFirstLetter = i!==0?alhabeticalArrayRus[i-1].rus[0].toLowerCase():1;

    if (firstLetter !== previousFirstLetter) {
      fragment.innerHTML += `
        <li class='big-letter'>
          <span>${alhabeticalArrayRus[i].rus[0]}</span>
        </li>
      `;
    }

    fragment.innerHTML += `
      <li>
        <a href='./index.html?index=${alhabeticalArrayRus[i].index}'>
          <span>${alhabeticalArrayRus[i].rus}</span>
          <span>${alhabeticalArrayRus[i].heb}</span>
        </a>
      </li>
    `;
  }
  rusList.innerHTML = fragment; // add long list to HTML
}

function createHebList() {
  const fragment = document.createDocumentFragment(); // temp fragment for long list of elements

  if(alhabeticalArrayHeb.length === 0) {
    alhabeticalArrayHeb = [...myDictionary].sort((a, b) => {
      return a.heb.localeCompare(b.heb, 'he');
    });
  }

  if (hebList.getElementsByTagName("li").length > 0) return; // cancel

  for (let i = 0; i < alhabeticalArrayHeb.length; i++) {
    let firstLetter = alhabeticalArrayHeb[i].heb[0].toLowerCase();
    let previousFirstLetter = i!==0?alhabeticalArrayHeb[i-1].heb[0].toLowerCase():1;

    if (firstLetter !== previousFirstLetter) {
      fragment.innerHTML += `
        <li class='big-letter'>
          <span>${alhabeticalArrayHeb[i].heb[0]}</span>
        </li>
      `;
    }

    fragment.innerHTML += `
      <li class='hebrew'>
        <a href='./index.html?index=${alhabeticalArrayHeb[i].index}'>
          <span>${alhabeticalArrayHeb[i].rus}</span>
          <span>${alhabeticalArrayHeb[i].heb}</span>
        </a>
      </li>
    `;
  }
  hebList.innerHTML = fragment; // add long list to HTML
}

rusList.innerHTML = ''; // reset
hebList.innerHTML = ''; // reset
createRusList();

////////////////////
//    switcher    //
////////////////////
const switcher = document.querySelector('.switcher');
switcher.addEventListener("click", switchList);

function switchList() {
  this.querySelector('.rus').classList.toggle('active');
  this.querySelector('.heb').classList.toggle('active');
  rusList.classList.toggle('active');
  hebList.classList.toggle('active');

  if(this.querySelector('.rus').classList.contains('active')) {
    createRusList();
  } else if(this.querySelector('.heb').classList.contains('active')) {
    createHebList();
  }
}