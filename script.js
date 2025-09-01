import { myDictionaryFull } from '/myDictionaryApp/dictionary.js';
// import { myDictionaryFull } from '/dictionary.js';

// initial full dictionary
let myDictionary = myDictionaryFull;

/////// url parameters ///////
const params = new URLSearchParams(window.location.search);
const wordIndex = params.get("index");
//////////////////////////////

let lock = false;
let memoryLock = false;

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
randomButton.addEventListener("pointerdown", (e)=>randomWord(e));


/////////////////////////////
//        Next button      //
/////////////////////////////
function nextWord(e) {
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
nextButton.addEventListener("pointerdown", (e)=>nextWord(e));


/////////////////////////////
//      Previous button    //
/////////////////////////////
function prevWord(e) {
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
prevButton.addEventListener("pointerdown", (e)=>prevWord(e));


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
        myDictionary = myDictionaryFull;
        memoryLock = false;
    } else {
        myDictionary = getRandomElements(myDictionaryFull, 10);
        memoryLock = true;
    }

    console.log(myDictionary);
    if (letterNumber >= myDictionary.length) {
        letterNumber = 0;
    }
    // console.log(letterNumber);
    updateCurrentNumber();
    updateAll();
    showFullLength();
}

//////////////////////////////////////////

function getRandomElements(arr, count = 9) {
    const result = [];
    const usedIndices = new Set();

    // show current word
    let initialIndex = letterNumber>0?letterNumber:Math.floor(Math.random() * arr.length);
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

//////////////////////////////////////////