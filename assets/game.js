
//create an array of bird names
var birds = ["Northern cardinal","Mallard","Blue jay","Swallow tailed kite","Red winged blackbird","Pileated woodpecker","Sandpiper","Great blue heron","Great egret","Snail kite"]
//create an array of letters in the alphabet
var alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
//create an empty array of guessed letters
var guessedLetters = [];
//create an empty array of the chosen bird's letters:
var chosenBird = [];
//create the starting variables
var winsDisplay = 0;
var chancesDisplay = 13;


//computer should randomly choose one of the birds from the birds array
//computer should create as many "_"s as the letters of the chosen bird
//"_"s should be displayed at wordDisplay
//listen to the keypress
//when any key is pressed, instructions will be seen as "GAME ON"
    //pressed key should be a letter
    //pressed key should not be pressed before
//pressed key should be added to guessedLetters array
//guessedLetters array should be visible at guessedDisplay
//comparing if guessedletters are in the birdletters array
        //if it is, it should change the "_" to the letter itself
        //if not do nothing
    //eitherway, chancesDisplay should be -1 and it should add the letter to the guessed letters array
//WIN: if all of the "_"s are gone from the display without the chances being 13, you win
    //winsDisplay should be +1
    //should play the mp3 of the bird voice automatically
    //should display learn more
//LOSE: if you lose, 
    //should play the mp3 of the bird voice automatically
    //should display learn more