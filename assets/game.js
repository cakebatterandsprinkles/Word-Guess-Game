//create an array of bird names
var birds = ["Northern cardinal", "Mallard", "Blue jay", "Swallow tailed kite", "Red winged blackbird", "Pileated woodpecker", "Sandpiper", "Great blue heron", "Great egret", "Snail kite"]
//create an array of letters in the alphabet
var alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".split("");
//create an empty array of guessed letters
var guessedLetters = [];
//create chosenWord variable
var chosenWord;
//create an empty array of the chosen bird's letters
var chosenWordLetters = [];
//create an array for the underline display
var underline = [];
//create the starting variables
//chancesDisplay is equal to 13
var winsDisplay = 0;
var chancesDisplay = 13;
var keyPressed;
var instructions = document.querySelector(".instructions");
var guessedDisplay = document.querySelector(".guessedDisplay");
var chosenWordDisplay = document.querySelector(".wordDisplay");


//computer should choose the first one of the birds from the birds array when the page opens
chooseWord(0);
console.log(chosenWord);

//computer should create as many "_"s as the letters of the chosen bird
chosenWordLetters = chosenWord.split("");
console.log(chosenWordLetters);
//"_"s should be displayed at wordDisplay
wordDisplay(chosenWordLetters);
//listen to the keypress
document.addEventListener("keydown", function (event) {
    //when any key is pressed, instructions will be seen as "GAME ON"
    instructions.textContent = "Game On!";
    keyPressed = event.key;

    //pressed key should be a letter
    //pressed key should not be pressed before
    if (alphabet.indexOf(keyPressed) === -1) {
        alert("I only accept letters, mate");
    } else if (guessedLetters.indexOf(keyPressed) === -1) {
        //pressed key should be added to guessedLetters array
        //guessedLetters array should be visible at guessedDisplay
        guessedLetters.push(keyPressed);
        guessedDisplay.textContent = guessedLetters;
        //chancesDisplay should be minus one
        setChances();
    }

    //comparing if guessedletters are in the chosenWordLetters array
    var indices = [];
    var indexes = chosenWordLetters.indexOf(keyPressed);
    while ( indexes != -1) {
      indices.push(indexes);
      indexes = chosenWordLetters.indexOf(keyPressed, indexes + 1);
    }

    indices.forEach(replaceLetters);

    //if it is, it should change the "_" to the letter itself
    //if not do nothing
    //eitherway, chancesDisplay should be -1 and it should add the letter to the guessed letters array
    if (chosenWordLetters.indexOf(keyPressed) !== -1) {
        chosenWordDisplay[chosenWordLetters.indexOf(keyPressed)].textContent = keyPressed;
        wordDisplay(chosenWordLetters);
    }
})






//WIN: if all of the "_"s are gone from the display without the chances being 13, you win
//winsDisplay should be +1
//should play the mp3 of the bird voice automatically
//should display learn more
//LOSE: if you lose, 
//should play the mp3 of the bird voice automatically
//should display learn more

function chooseWord(num) {
    chosenWord = birds[num];
}

function wordDisplay(array) {
    for (i = 0; i < chosenWordLetters.length; i++) {
        if (alphabet.indexOf(array[i]) === -1) {
            underline.push("&nbsp;&nbsp;&nbsp;");
        } else if (alphabet.indexOf(array[i]) !== -1) {
            underline.push("_ ");
        }
    }
    chosenWordDisplay.innerHTML = underline.join("");
    // console.log(underline);
}

function setChances() {
    document.querySelector(".chancesDisplay").textContent = chancesDisplay - 1;
}
function replaceLetters (letter) {

}