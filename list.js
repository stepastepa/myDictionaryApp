// import { myDictionaryFull } from '/myDictionaryApp/dictionary.js';
import { myDictionaryFull } from './dictionary.js';

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

  let p1 = performance.now();
  if(alhabeticalArrayRus.length === 0) {
      alhabeticalArrayRus = [...myDictionary].sort((a, b) => {
      return a.rus.localeCompare(b.rus, 'ru');
    });
  }
  let p2 = performance.now();

  console.log('⏱️sort', `${p2-p1}ms`);


  if (rusList.getElementsByTagName("li").length > 0) return; // cancel

  let p3 = performance.now();
  const tempList = document.createElement('ul');
  for (let i = 0; i < alhabeticalArrayRus.length; i++) {
    let firstLetter = alhabeticalArrayRus[i].rus[0].toLowerCase();
    let previousFirstLetter = i!==0?alhabeticalArrayRus[i-1].rus[0].toLowerCase():1;

    if (firstLetter !== previousFirstLetter) {
      const $liCategory = document.createElement('li');
      //(vmyshko): добавляем элемент предварительно в ДОМ дерево (виртуальное -- оно еще не отображается браузером)
      tempList.appendChild($liCategory);
      // меняем штмл только одного элемента, который мы создали,
      // чтобы не сериализовать (преобразовывать в текст и обратно) всё дерево элементов полностью (это долго)
      $liCategory.outerHTML = `
        <li class='big-letter'>
          <span>${alhabeticalArrayRus[i].rus[0]}</span>
        </li>
      `;
    }

    const $liItem = document.createElement('li');
    tempList.appendChild($liItem);
    // меняем только один элемент (также как и выше)
    $liItem.outerHTML = `
      <li>
        <a href='./index.html?index=${alhabeticalArrayRus[i].index}'>
          <span>${alhabeticalArrayRus[i].rus}</span>
          <span>${alhabeticalArrayRus[i].heb}</span>
        </a>
      </li>
    `;
    tempList.appendChild($liItem);

  }
  let p4 = performance.now();

  console.log('⏱️html', `${p4-p3}ms`);

  rusList.appendChild(tempList); // add long list to HTML
}

function createHebList() {
  if(alhabeticalArrayHeb.length === 0) {
    alhabeticalArrayHeb = [...myDictionary].sort((a, b) => {
      return a.heb.localeCompare(b.heb, 'he');
    });
  }

  if (hebList.getElementsByTagName("li").length > 0) return; // cancel

  const tempList = document.createElement('ul');

  for (let i = 0; i < alhabeticalArrayHeb.length; i++) {
    let firstLetter = alhabeticalArrayHeb[i].heb[0].toLowerCase();
    let previousFirstLetter = i!==0?alhabeticalArrayHeb[i-1].heb[0].toLowerCase():1;

    if (firstLetter !== previousFirstLetter) {
      const $liCategory = document.createElement('li');
      tempList.appendChild($liCategory);
      $liCategory.outerHTML = `
        <li class='big-letter'>
          <span>${alhabeticalArrayHeb[i].heb[0]}</span>
        </li>
      `;
    }

    const $liItem = document.createElement('li');
    tempList.appendChild($liItem);
    $liItem.outerHTML = `
      <li class='hebrew'>
        <a href='./index.html?index=${alhabeticalArrayHeb[i].index}'>
          <span>${alhabeticalArrayHeb[i].rus}</span>
          <span>${alhabeticalArrayHeb[i].heb}</span>
        </a>
      </li>
    `;
    tempList.appendChild($liItem);
  }
  hebList.appendChild(tempList); // add long list to HTML
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