//create an array of bird names
var birds = ["cardinal", "mallard", "blue jay", "swallow tailed kite", "red winged blackbird", "pileated woodpecker", "sandpiper", "great blue heron", "great egret", "snail kite"]
var images = ["cardinal.jpg", "mallard.jpg", "jay.jpg", "swallowkite.jpg", "redblackbirb.jpg", "woodpecker.jpg", "sandpiper.jpg", "heron.jpg", "egret.jpg", "snailkite.jpg", ];
//create an array of letters in the alphabet
var alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".split("");
//create an empty array of guessed letters
var guessedLetters = [];
//create chosenWord variable
var chosenWord;
var chosenBirdIndex = 0;
//create an empty array of the chosen bird's letters
var chosenWordLetters = [];
//create the starting variables
//chancesDisplay is equal to 13
var winsDisplay = 0;
var chancesDisplay = 13;
var keyPressed;
var indices = [];
var instructions = document.querySelector(".instructions");
var guessedDisplay = document.querySelector(".guessedDisplay");
var chosenWordDisplay = document.querySelector(".wordDisplay");


//computer should choose the first one of the birds from the birds array when the page opens
chooseWord(chosenBirdIndex);
console.log(chosenWord);

//computer should create as many "_"s as the letters of the chosen bird
console.log(chosenWordLetters);
//"_"s should be displayed at wordDisplay
wordDisplay();
//listen to the keypress
document.addEventListener("keydown", function (event) {
    //when any key is pressed, instructions will be seen as "GAME ON"
    instructions.textContent = "Game On!";
    keyPressed = event.key.toLowerCase();

    //pressed key should be a letter
    //pressed key should not be pressed before
    if (alphabet.indexOf(keyPressed) === -1) {
        if (keyPressed.length === 1) {
            alert("I only accept letters, mate");
        }
    } else if (guessedLetters.indexOf(keyPressed) === -1) {
        //pressed key should be added to guessedLetters array
        //guessedLetters array should be visible at guessedDisplay
        guessedLetters.push(keyPressed);
        guessedDisplay.textContent = guessedLetters;
        //comparing if guessedletters are in the chosenWordLetters array
        var letterIndex = chosenWordLetters.indexOf(keyPressed);
        while (letterIndex != -1) {
            indices.push(letterIndex);
            letterIndex = chosenWordLetters.indexOf(keyPressed, letterIndex + 1);
        }
        wordDisplay();

        //chancesDisplay should be minus one
        setChances();
    }

    //if it is, it should change the "_" to the letter itself
    //if not do nothing
    //eitherway, chancesDisplay should be -1 and it should add the letter to the guessed letters array
    // if (chosenWordLetters.indexOf(keyPressed) !== -1) {
    //     chosenWordDisplay[chosenWordLetters.indexOf(keyPressed)].textContent = keyPressed;
    //     wordDisplay(chosenWordLetters);
    // }
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
    document.querySelector(".birdPictures").setAttribute("src", "../Word-Guess-Game/assets/images/" + images[num]);
    chosenWordLetters = chosenWord.split("");
    indices = [];
    guessedLetters = [];
    chancesDisplay = 13;
    document.querySelector(".chancesDisplay").textContent = chancesDisplay;
    document.querySelector(".guessedDisplay").textContent = guessedLetters;
    wordDisplay();
}

function wordDisplay() {
    //create an array for the underline display
    var underline = [];
    for (i = 0; i < chosenWordLetters.length; i++) {
        if (indices.indexOf(i) !== -1) {
            underline.push(chosenWordLetters[i]);
        } else if (alphabet.indexOf(chosenWordLetters[i]) === -1) {
            underline.push("&nbsp;&nbsp;&nbsp;");
        } else if (alphabet.indexOf(chosenWordLetters[i]) !== -1) {
            underline.push("_ ");
        }
    }
    chosenWordDisplay.innerHTML = underline.join("");
    // console.log(underline);
}

function setChances() {
    document.querySelector(".chancesDisplay").textContent = chancesDisplay - 1;
    chancesDisplay = chancesDisplay - 1;
    if (chancesDisplay === 0 || chosenWordDisplay.textContent.indexOf('_') === -1) {
        if (chosenWordDisplay.textContent.indexOf('_') === -1) {
            winsDisplay++;
            document.querySelector(".winsDisplay").textContent = winsDisplay;
        } else {
            alert("Answer is: " + chosenWord);
        }
        chosenBirdIndex++;

        if (chosenBirdIndex === birds.length) {
            gameOver();
        } else {
            chooseWord(chosenBirdIndex);
        }
    }
}

function gameOver() {
    var confirmed = confirm("The game is over for now. Would you like to see more birds?");
    if (confirmed) {
        window.location = "https://www.allaboutbirds.org/guide/browse/taxonomy/Anatidae";
    } else {
        window.location.reload();
    }
}