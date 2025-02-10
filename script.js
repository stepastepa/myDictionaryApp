import { myDictionary } from '/myDictionaryApp/dictionary.js';


/////// How much words? ///////
let howMuchWords = document.querySelector("#howMuchWords");
howMuchWords.textContent = "total: " + myDictionary.length;

/////// Number of current word ///////
let letterNumber;
console.log(letterNumber);

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

function randomWord() {
    let numberPrev = letterNumber;
    randomNumber();
    while(numberPrev == letterNumber) {
        console.log("Refresh!!!");
        randomNumber();
    }
    updateAll();
    blink("#randomButton");
};

let randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("click", randomWord);


/////////////////////////////
//        Next button      //
/////////////////////////////
function nextWord() {
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
    blink("#nextButton");
};

let nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", nextWord);


/////////////////////////////
//      Previous button    //
/////////////////////////////
function prevWord() {
    if (letterNumber !== undefined) {
        letterNumber--;
    }
    if (letterNumber < 0 || letterNumber === undefined) {
        letterNumber = myDictionary.length - 1;
    }
    updateAll();
    blink("#prevButton");
};

let prevButton = document.querySelector("#prevButton");
prevButton.addEventListener("click", prevWord);


//////////////////////
//      switch      //
//////////////////////
let rusSwitch = document.querySelector("#russian");
let hebSwitch = document.querySelector("#hebrew");

function rusSelect() {
    hebSwitch.classList.add("hiddenWord");
    rusSwitch.classList.remove("hiddenWord");
}

function hebSelect() {
    rusSwitch.classList.add("hiddenWord");
    hebSwitch.classList.remove("hiddenWord");
}

rusSwitch.addEventListener("click", rusSelect);
hebSwitch.addEventListener("click", hebSelect);


/////////////////////////////////
//      show/hide details      //
/////////////////////////////////
let detailsSwitch = document.querySelector(".word-details");

detailsSwitch.addEventListener("click", ()=>detailsSwitch.classList.toggle("hiddenDetails"));


////////////////////////////
//      blink effect      //
////////////////////////////
function blink(currentButton) {
    if (document.querySelector(".blink")) {
        document.querySelector(".blink").classList.remove('blink');
        document.querySelector(currentButton + ">div").classList.add('blink');
    } else {
        document.querySelector(currentButton + ">div").classList.add('blink');
    }
}
