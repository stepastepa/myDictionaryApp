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
randomButton.addEventListener("click", (e)=>randomWord(e));


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
nextButton.addEventListener("click", (e)=>nextWord(e));


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
prevButton.addEventListener("click", (e)=>prevWord(e));


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
    document.querySelector(currentButton + ">div").classList.add('blink');
    document.querySelector(currentButton + ">div").appendChild(circle);
}
