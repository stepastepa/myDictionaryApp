var myDictionary = [
    ///////// 2018.11.09 /////////////////////////
    { rus: 'папа', heb: 'אבא', speak: 'аба' },
    { rus: 'пришёл', heb: 'בא', speak: '' },
    { rus: 'отец', heb: 'אב', speak: '' },
    { rus: 'спина', heb: 'גב', speak: '' },
    { rus: 'крыша', heb: 'גג', speak: '' },
    { rus: 'ткань', heb: 'בד', speak: '' },
    { rus: 'рыба', heb: 'דג', speak: '' },
    { rus: 'волновался', heb: 'דאג', speak: '' },
    { rus: 'одежда', heb: 'בגד', speak: '' },
    { rus: 'руль', heb: 'הגה', speak: '' },
    { rus: 'любовь', heb: 'אהבה', speak: '' },
    ///////// 2018.11.10 /////////////////////////
    { rus: 'крючок', heb: 'וו', speak: '' },
    { rus: 'кукла', heb: 'בובה', speak: '' },
    { rus: 'одинокий', heb: 'בודד', speak: '' },
    ///////// 2018.11.11 /////////////////////////
    { rus: 'волк', heb: 'זאב', speak: '' },
    { rus: 'муха', heb: 'זבוב', speak: '' },
    { rus: 'это', heb: 'זה', speak: '' },
    { rus: 'золото', heb: 'זהב', speak: '' },
    ///////// 2018.11.12 /////////////////////////
    { rus: 'милый', heb: 'חביב', speak: '' },
    { rus: 'один', heb: 'אחד', speak: '' },
    { rus: 'процент', heb: 'אחוז', speak: '' },
    { rus: 'отклонил', heb: 'דחה', speak: '' },
    ///////// 2018.11.13 /////////////////////////
    { rus: 'хорошо', heb: 'טוב', speak: '' },
    { rus: 'нитка', heb: 'חוט', speak: '' },
    { rus: 'грех', heb: 'חטא', speak: '' },
    { rus: 'грешить', heb: 'חטא', speak: '' },
    { rus: 'загадка', heb: 'חידה', speak: '' },
    { rus: 'надёжный', heb: 'בטוח', speak: '' },
    ///////// 2018.11.14 /////////////////////////
    { rus: 'рука', heb: 'יד', speak: '' },
    { rus: 'вместе', heb: 'יחד', speak: '' },
    { rus: 'друг', heb: 'ידיד', speak: '' },
    { rus: 'живой', heb: 'חי', speak: '' },
    { rus: 'зверь', heb: 'חיה', speak: '' },
    { rus: 'честь', heb: 'כבוד', speak: '' },
    { rus: 'длинный', heb: 'ארוך', speak: '' },
    ///////// 2018.11.15 /////////////////////////
    { rus: 'сердце', heb: 'לב', speak: '' },
    { rus: 'нет!', heb: 'לא', speak: '' },
    { rus: 'собака', heb: 'כלב', speak: '' },
    { rus: 'шел, путник', heb: 'הלך', speak: '' },
    { rus: 'приходить', heb: 'לבוא', speak: '' },
    { rus: 'доска, таблица', heb: 'לוח', speak: '' },
    ///////// 2018.11.16 /////////////////////////
    { rus: 'мама', heb: 'אמא', speak: '' },
    { rus: 'вода', heb: 'מים', speak: '' },
    { rus: 'мозг', heb: 'מוח', speak: '' },
    { rus: 'царь', heb: 'מלך', speak: '' },
    { rus: 'приятный', heb: 'נאה', speak: '' },
    { rus: 'белый', heb: 'לבן', speak: '' },
    { rus: 'пророк', heb: 'נביא', speak: '' },
    ///////// 2018.11.17 /////////////////////////
    { rus: 'лошадь', heb: 'סוס', speak: '' },
    { rus: 'секрет', heb: 'סוד', speak: '' },
    { rus: 'переулок', heb: 'סמטה', speak: '' },
    { rus: 'опыт', heb: 'ניסיון', speak: '' },
    { rus: 'вежливость', heb: 'נימוס', speak: '' },
    { rus: 'белка', heb: 'סנאי', speak: '' },
    { rus: 'осложнение', heb: 'סיבוך', speak: '' },
    ///////// 2018.11.18 /////////////////////////
    { rus: 'глаз', heb: 'עין', speak: '' },
    { rus: 'исчез, неизвестное', heb: 'נעלם', speak: '' },
    { rus: 'двигается', heb: 'נע', speak: '' },
    { rus: 'касается', heb: 'נוגע', speak: '' },
    { rus: 'пирог', heb: 'עוגה', speak: '' },
    { rus: 'изучение', heb: 'עיון', speak: '' },
    { rus: 'слон', heb: 'פיל', speak: '' },
    { rus: 'конец', heb: 'סוף', speak: '' },
    { rus: 'рабочий, работающий', heb: 'פועל', speak: '' },
    ///////// 2018.11.19 /////////////////////////
    { rus: 'игрушка, игрушечный', heb: 'צעצוע', speak: '' },
    { rus: 'дерево', heb: 'עץ', speak: '' },
    { rus: 'потомок', heb: 'צאצא', speak: '' },
    { rus: 'обезьяна', heb: 'קוף', speak: '' },
    { rus: 'лето, пробуждение', heb: 'קיץ', speak: '' },
    { rus: 'отрывок, сегмент', heb: 'קטע', speak: '' },
    { rus: 'место, местоположение', heb: 'מקום', speak: '' },
    { rus: 'справедливость', heb: 'צדק', speak: '' },
    { rus: 'прыгал, сустав', heb: 'קפץ', speak: '' }

];

/////// How much words? ///////
var howMuchWords = document.querySelector("#howMuchWords");
howMuchWords.textContent = "total: " + myDictionary.length;

/////// Number of current word ///////
var letterNumber;
console.log(letterNumber);

var wordNumber = document.querySelector("#wordNumber");

function updateNumber() {
    var currentNumber = letterNumber;
    if (letterNumber !== undefined) {
      currentNumber = letterNumber + 1;
    } else if (letterNumber === undefined) {
      currentNumber = 0;
    }
    wordNumber.textContent = "current: " + currentNumber;
  };
  updateNumber();




/////////////////////////////////////////////////////////
//////////////////       buttons       //////////////////
/////////////////////////////////////////////////////////
var russianWord = document.querySelector("#russian");
var hebrewWord = document.querySelector("#hebrew");

function updateWordandNumber() {
    russianWord.textContent = myDictionary[letterNumber].rus;
    hebrewWord.textContent = myDictionary[letterNumber].heb;

    updateNumber();
}


/////////////////////////////
//  Random word generator  //
/////////////////////////////
function randomNumber() {
    letterNumber = Math.floor( Math.random() * myDictionary.length);
}//done//

function randomWord() {
    var numberPrev = letterNumber;
    randomNumber();//done//
    while(numberPrev == letterNumber) {
        console.log("Refresh!!!");
        randomNumber();//done//
    }
    updateWordandNumber();
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
    updateWordandNumber();
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
    updateWordandNumber();
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
    rusSwitch.classList.remove("hiddenWord");//done//
}

function hebSelect() {
    rusSwitch.classList.add("hiddenWord");
    hebSwitch.classList.remove("hiddenWord");//done//
}

rusSwitch.addEventListener("click", rusSelect);
hebSwitch.addEventListener("click", hebSelect);


/////////////////////////////
//        Play button      //
/////////////////////////////
/*var forward = true;
var backward = false;

var playWord = function() {
    if (x !== undefined && forward) {
        x++;
    }
    if (x !== undefined && backward) {
        x--;
    }
    if (x === undefined) {
        x = 0;
    }
    if (x >= myDictionary.length) {*/
        /*window.clearInterval(play);*/
/*        console.log("END!");
        forward = false;
        backward = true;
    }
    if (x == 0) {
        forward = true;
        backward = false;
    }
    updateWordandNumber();
};
var play;
var playing = function() {
    play = window.setInterval(playWord, 3000);
}

var playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playing);*/
