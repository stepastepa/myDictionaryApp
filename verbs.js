// import { verbsDictionary } from '/myDictionaryApp/dictionary-4.js';
import { verbsDictionary } from './dictionary-4.js';

// initial full dictionary
let myDictionary = verbsDictionary;

/////// url parameters ///////
const params = new URLSearchParams(window.location.search);
const wordIndex = params.get("index");
//////////////////////////////

let lock = false;
let memoryLock = false;
let tempMemoryIndexes = [];

/////// How much words? ///////
let howMuchWords = document.querySelector("#howMuchWords");
function showFullLength() {
    howMuchWords.textContent = "total: " + myDictionary.length;
}
showFullLength();

/////// Number of current word ///////
let letterNumber;
// console.log(letterNumber);

let wordNumber = document.querySelector("#wordNumber");

function updateCurrentNumber() {
    let currentNumber = letterNumber;
    if (letterNumber !== undefined) {
      currentNumber = letterNumber + 1;
    } else if (letterNumber === undefined) {
      currentNumber = 0;
    }
    wordNumber.textContent = "current: " + currentNumber;
};
// initial current number
updateCurrentNumber();



/////////////////////////////////////////////////////////
//////////////////        words        //////////////////
/////////////////////////////////////////////////////////
let russianWord = document.querySelector("#russian");
let hebrewWord = document.querySelector("#hebrew>span");
let hebrewSpeak = document.querySelector("#speak");
let hebrewType = document.querySelector("#type>span");

function updateAll() {
    russianWord.textContent = myDictionary[letterNumber].rus;
    hebrewWord.textContent = myDictionary[letterNumber].heb;
    
    if(!myDictionary[letterNumber].speak) {
        hebrewSpeak.textContent = '...';
    } else {
        hebrewSpeak.textContent = myDictionary[letterNumber].speak;
    }

    if (!myDictionary[letterNumber].type) {
        hebrewType.textContent = '...';
    } else {
        hebrewType.textContent = myDictionary[letterNumber].type;
    }

    updateCurrentNumber();
}


/////////////////////////////
//  Random word generator  //
/////////////////////////////
function randomNumber() {
    letterNumber = Math.floor( Math.random() * myDictionary.length);
}

function randomWord(e) {
    e.preventDefault();

    let numberPrev = letterNumber;
    randomNumber();
    while(numberPrev == letterNumber) {
        console.log("Refresh!!!");
        randomNumber();
    }
    updateAll();
    blink("#randomButton", e);
};

let randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("pointerdown", (e)=>randomWord(e), { passive: false });


/////////////////////////////
//        Next button      //
/////////////////////////////
function nextWord(e) {
    e.preventDefault();

    if (letterNumber !== undefined) {
        letterNumber++;
    }
    if (letterNumber === undefined) {
        letterNumber = 0;
    }
    if (letterNumber >= myDictionary.length) {
        letterNumber = 0;
    }
    updateAll();
    blink("#nextButton", e);
};

let nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("pointerdown", (e)=>nextWord(e), { passive: false });


/////////////////////////////
//      Previous button    //
/////////////////////////////
function prevWord(e) {
    e.preventDefault();
    
    if (letterNumber !== undefined) {
        letterNumber--;
    }
    if (letterNumber < 0 || letterNumber === undefined) {
        letterNumber = myDictionary.length - 1;
    }
    updateAll();
    blink("#prevButton", e);
};

let prevButton = document.querySelector("#prevButton");
prevButton.addEventListener("pointerdown", (e)=>prevWord(e), { passive: false });


//////////////////////
//      switch      //
//////////////////////
let rusSwitch = document.querySelector("#russian");
let hebSwitch = document.querySelector("#hebrew");

function rusSelect() {
    if(lock === false) {
        hebSwitch.classList.add("hiddenWord");
        rusSwitch.classList.remove("hiddenWord");
    }
}

function hebSelect() {
    if(lock === false) {
        rusSwitch.classList.add("hiddenWord");
        hebSwitch.classList.remove("hiddenWord");
    }
}

rusSwitch.addEventListener("pointerdown", rusSelect);
hebSwitch.addEventListener("pointerdown", hebSelect);


/////////////////////////////////
//      show/hide details      //
/////////////////////////////////
let detailsSwitch = document.querySelector(".word-details");

detailsSwitch.addEventListener("pointerdown", ()=>detailsSwitch.classList.toggle("hiddenDetails"));


////////////////////////////
//      blink effect      //
////////////////////////////
function blink(currentButton, e) {
    // console.log(e);
    // console.dir(e.currentTarget);
    let x = e.clientX - e.currentTarget.offsetLeft;
    let y = e.clientY - e.currentTarget.offsetTop;
    // console.log(e.clientX, e.clientY);
    // console.log(e.currentTarget.offsetLeft, e.currentTarget.offsetTop);

    let circle = document.createElement("span");
    circle.style.top = y + "px";
    circle.style.left = x + "px";

    if (document.querySelector(".blink")) {
        document.querySelector(".blink").removeChild(document.querySelector(".blink>span"));
        document.querySelector(".blink").classList.remove('blink');
    }
    document.querySelector(currentButton + ">div").classList.add("blink");
    document.querySelector(currentButton + ">div").appendChild(circle);
}


///////////////////////////
//      lock button      //
///////////////////////////
let lockButton = document.querySelector(".lock-button");
lockButton.addEventListener("pointerdown", lockWords);

let currentPosition = "-"; // memory of switcher

function lockWords() {
    if(hebSwitch.classList.contains("hiddenWord") === true) {
        currentPosition = "rus";
    }
    if(rusSwitch.classList.contains("hiddenWord") === true) {
        currentPosition = "heb";
    }

    lockButton.classList.toggle("lock-on");

    if(lock === false) {
        // console.log(currentPosition);
        hebSwitch.classList.remove("hiddenWord");
        rusSwitch.classList.remove("hiddenWord");
        lock = true;
    } else {
        // console.log(currentPosition);
        if(currentPosition === "rus") {
            hebSwitch.classList.add("hiddenWord");
        } else {
            rusSwitch.classList.add("hiddenWord");
        }
        lock = false;
    }
}

///////////////////////////////////////
//      if url parameter exists      //
///////////////////////////////////////

function checkUrlParameter() {
    if (wordIndex) {
        letterNumber = +wordIndex;
        updateAll();
    }
};

window.addEventListener("load", checkUrlParameter);

///////////////////////////////////////
//      random 10 repeat button      //
///////////////////////////////////////
let memoryButton = document.querySelector(".memory-button");
memoryButton.addEventListener("pointerdown", repeatWords);

function repeatWords() {
    memoryButton.classList.toggle("lock-on");

    if(memoryLock === true) {
        myDictionary = verbsDictionary;
        memoryLock = false;
        letterNumber = tempMemoryIndexes[letterNumber]; // retrieve global index from memory
    } else {
        // if (letterNumber === undefined) {
        //     letterNumber = Math.floor(Math.random() * myDictionaryFull.length);
        // }
        myDictionary = getRandomElements(verbsDictionary, 10);
        memoryLock = true;
        letterNumber = 0;
    }

    console.log(myDictionary);
    console.log(letterNumber);
    updateCurrentNumber();
    showFullLength();
    updateAll();
}

//////////////////////////////////////////

/*
// current word + 9 random words:
function getRandomElements(arr, count = 9) {
    const result = [];
    const usedIndices = new Set();

    // show current word
    let initialIndex = letterNumber;
    usedIndices.add(initialIndex);
    result.push(arr[initialIndex]);

    while (result.length < count && result.length < arr.length) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            result.push(arr[randomIndex]);
        }
    }

    return result;
}

// Пример
// const bigArray = Array.from({ length: 1000000 }, (_, i) => i + 1); // массив от 1 до 1 000 000
// const randomTen = getRandomElements(bigArray, 10);
// console.log(randomTen);
*/

// current word + 9 words from 9 parts:
function getRandomElements(arr, count) {
    const result = [];
    const usedIndices = new Set();
    tempMemoryIndexes = []; // reset memory array

    // Добавляем "текущее" слово
    let initialIndex = letterNumber;

    // Вычисляем, сколько частей нужно
    let parts = count - 1; // первое слово уже выбрано (9шт)
    if (initialIndex !== undefined) {
        usedIndices.add(initialIndex);
        result.push(arr[initialIndex]);
        tempMemoryIndexes.push(initialIndex);
    } else {
        parts = count; // первое слово не выбрано (10шт)
    }
    const segmentSize = Math.floor(arr.length / parts);

    for (let i = 0; i < parts; i++) {
        // Находим диапазон текущего сегмента
        const start = i * segmentSize;
        const end = (i === parts-1) ? arr.length : start + segmentSize; // 0-8 (9шт) или 0-9 (10шт)

        // Берем случайный индекс из этого диапазона
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * (end - start)) + start;
        } while (usedIndices.has(randomIndex));

        usedIndices.add(randomIndex);
        result.push(arr[randomIndex]);
        tempMemoryIndexes.push(randomIndex);
    }

    return result;
}