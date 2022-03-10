'use strict';

let userScore = 0;

// question "0" -- user's name
let usersName = prompt('Hi, what\'s your name?');
// console.log(usersName);

alert(`Welcome to my About Me project, ${usersName}!`);
// console.log(`Welcome to my About Me project, ${usersName}!`);
 

function questionOne() {
  // question 1
  let answerOne = prompt('So how about a short quiz to get to know me better? (Yes/no or y/n answers please.) Did I grow up in Washington state?').toLowerCase();
  // console.log(answerOne);

  if (answerOne === 'n' || answerOne === 'no') {
    alert('That\'s correct! I didn\'t grow up in Washington state -- I\'m from Ohio!');
    //console.log('That\'s correct! I didn\'t grow up in Washington state -- I\'m from Ohio!');
    userScore++;
  } else if (answerOne === 'y' || answerOne === 'yes') {
    //console.log('Sorry, that\'s incorrect, I\'m actually from Ohio!');
    alert('Sorry, that\'s incorrect, I\'m actually from Ohio!');
  }
}

questionOne();

function questionTwo() {
  // question 2
  let answerTwo = prompt('Do I have a beard?').toLowerCase();
  // console.log(answerTwo);

  if (answerTwo === 'y' || answerTwo === 'yes') {
    alert('That\'s correct!');
    // console.log('That\'s correct!');
    userScore++;
  } else if (answerTwo === 'n' || answerTwo === 'no') {
      alert('Sorry, that\'s incorrect, I\'m definitely a beard guy.');
      // console.log('Sorry, that\'s incorrect, I\'m definitely a beard guy.');
  }
}

questionTwo();

// question 3
let answerThree = prompt('Do I like computer games a whole dang lot?').toLowerCase();
// console.log(answerThree);

if (answerThree === 'y' || answerThree === 'yes') {
  alert('You bet I do -- computer games can be so much fun!');
  // console.log('You bet I do -- computer games can be so much fun!');
  userScore++;
} else if (answerThree === 'n' || answerThree === 'no') {
  alert('Nope, that\'s incorrect, I\'m a gamer!');
  //console.log('Nope, that\'s incorrect, I\'m a gamer!');
}

// question 4
let answerFour = prompt('Do I live with any cats?').toLowerCase();
// console.log(answerFour);

if (answerFour === 'y' || answerFour === 'yes') {
  alert('Yes, I live with many cats!');
  //console.log('Yes, I live with many cats!');
  userScore++;
} else if (answerFour === 'n' || answerFour === 'no') {
  alert('Actually I live with many cats. And I think I\'m only allergic to one, thank goodness.');
  //console.log('Actually I live with many cats. And I think I\'m only allergic to one, thank goodness.');
}

// question 5
let answerFive = prompt('And finally: Have I ever visited Europe?').toLowerCase();
// console.log(answerFive);

if (answerFive === 'y' || answerFive === 'yes') {
  alert(`Nope, I've never been to Europe, but I'd like to go! Well, that's it: thanks for taking my quiz ${usersName}!`);
  //console.log(`Nope, I've never been to Europe, but I'd like to go! Well, that's it: thanks for taking my quiz ${usersName}!`);
} else if (answerFive === 'n' || answerFive === 'no') {
  alert(`Sadly yes, I haven't been to Europe -- yet!! Well, that's it: thanks for taking my quiz ${usersName}!`);
  //console.log(`Sadly yes, I haven't been to Europe -- yet!! Well, that's it: thanks for taking my quiz ${usersName}!`);
  userScore++;
}

// question 6 -- number guessing game >>> "1 * prompt" is to convert str to num
let numberGuess = 1 * prompt('Time for a different kind of guessing game! You\'ll have four tries to guess a number between 1 and 100! Whenever you guess wrong, I\'ll tell you if you\'re too high or too low!');
// console.log(numberGuess);
let numberFromOneToHundred = 57;
let i;

for (i = 0; i < 3; i++) {
    if (numberGuess < numberFromOneToHundred) {
      numberGuess = 1 * prompt('Sorry, your guess is too low, please try again.')
      // console.log('Sorry, your guess is too low, please try again.')
    } else if (numberGuess > numberFromOneToHundred) {
      numberGuess = 1 * prompt('Sorry, your guess is too high, please try again.')
      // console.log('Sorry, your guess is too high, please try again.')
    } else if (numberGuess === numberFromOneToHundred) {
      alert(`Wow, you guessed it! The number is ${numberFromOneToHundred}!`);
      // console.log(`Wow, you guessed it! The number is ${numberFromOneToHundred}!`);
      userScore++;
      break;
    }
}
if (numberGuess !== numberFromOneToHundred) {
  alert(`Nice try! The number was ${numberFromOneToHundred}!`);
  // console.log(`Nice try! The number was ${numberFromOneToHundred}!`);
}

// question 7 -- multiple choice question
let answerMultipleChoice = prompt('And now for something completely different! What is one of my favorite colors? You are guessing from 4 different colors and you get 6 guesses!')
console.log(answerMultipleChoice)
let fourOfMyFavColors = ['blue', 'green', 'grey', 'brown']
i = 0;
let guessCounter;

for (guessCounter = 0; guessCounter < 5; guessCounter++) {
  for (i = 0; i < fourOfMyFavColors.length; i++) {
    if (fourOfMyFavColors[i] === answerMultipleChoice) {
      userScore++;
      break;
    }
  }
  if (fourOfMyFavColors[i] === answerMultipleChoice) {
    break;
  }
  answerMultipleChoice = prompt('Sorry, that\'s not one of my favorite colors. Please guess again.');
  // console.log(answerMultipleChoice);
}
alert(`The correct answers are ${fourOfMyFavColors[0]}, ${fourOfMyFavColors[1]}, ${fourOfMyFavColors[2]}, and ${fourOfMyFavColors[3]}.`);
// console.log(`The correct answers are ${fourOfMyFavColors[0]}, ${fourOfMyFavColors[1]}, ${fourOfMyFavColors[2]}, and ${fourOfMyFavColors[3]}.`);

alert(`Out of the 7 questions, you got ${userScore} correct!`);
// console.log(`Out of the 7 questions, you got ${userScore} correct!`)''

