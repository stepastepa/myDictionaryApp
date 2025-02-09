import { myDictionary } from '/myDictionaryApp/dictionary.js';


/////// How much words? ///////
var howMuchWords = document.querySelector("#howMuchWords");
howMuchWords.textContent = "total: " + myDictionary.length;

/////// Number of current word ///////
var letterNumber;
console.log(letterNumber);

var wordNumber = document.querySelector("#wordNumber");

function updateCurrentNumber() {
    var currentNumber = letterNumber;
    if (letterNumber !== undefined) {
      currentNumber = letterNumber + 1;
    } else if (letterNumber === undefined) {
      currentNumber = 0;
    }
    wordNumber.textContent = "current: " + currentNumber;
};
updateCurrentNumber();



/////////////////////////////////////////////////////////
//////////////////        words        //////////////////
/////////////////////////////////////////////////////////
var russianWord = document.querySelector("#russian");
var hebrewWord = document.querySelector("#hebrew>span");
var hebrewSpeak = document.querySelector("#speak");
var hebrewType = document.querySelector("#type>span");

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
    var numberPrev = letterNumber;
    randomNumber();
    while(numberPrev == letterNumber) {
        console.log("Refresh!!!");
        randomNumber();
    }
    updateAll();
};

var randomButton = document.querySelector("#randomButton");
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
};

var nextButton = document.querySelector("#nextButton");
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
};

var prevButton = document.querySelector("#prevButton");
prevButton.addEventListener("click", prevWord);


//////////////////////
//      switch      //
//////////////////////
var rusSwitch = document.querySelector("#russian");
var hebSwitch = document.querySelector("#hebrew");

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
