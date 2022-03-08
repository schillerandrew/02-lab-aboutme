'use strict';

let userName = prompt('Hi, what\'s your name?');
alert(`Welcome to my About Me project, ${userName}!`);

let answerOne = prompt('So how about a short quiz to get to know me better? (Yes/no or y/n answers please.) Did I grow up in Washington state?').toLowerCase();

if (answerOne === 'n' || answerOne === 'no') {
  //console.log('That\'s correct! I didn\'t grow up in Washington state -- I\'m from Ohio!');
  alert('That\'s correct! I didn\'t grow up in Washington state -- I\'m from Ohio!');
} else if (answerOne === 'y' || answerOne === 'yes') {
  //console.log('Sorry, that\'s incorrect, I\'m actually from Ohio!');
  alert('Sorry, that\'s incorrect, I\'m actually from Ohio!');
}

let answerTwo = prompt('Do I have a beard?').toLowerCase();

if (answerTwo === 'y' || answerTwo === 'yes') {
  //console.log('That\'s correct!');
  alert('That\'s correct!');
} else if (answerTwo === 'n' || answerTwo === 'no') {
  //console.log('Sorry, that\'s incorrect, I\'m definitely a beard guy.');
  alert('Sorry, that\'s incorrect, I\'m definitely a beard guy.');
}

let answerThree = prompt('Do I like computer games a whole dang lot?').toLowerCase();

if (answerThree === 'y' || answerThree === 'yes') {
  //console.log('You bet I do -- computer games can be so much fun!');
  alert('You bet I do -- computer games can be so much fun!');
} else if (answerThree === 'n' || answerThree === 'no') {
  //console.log('Nope, that\'s incorrect, I\'m a gamer!');
  alert('Nope, that\'s incorrect, I\'m a gamer!');
}

let answerFour = prompt('Do I live with any cats?').toLowerCase();

if (answerFour === 'y' || answerFour === 'yes') {
  //console.log('Yes, I live with many cats!');
  alert('Yes, I live with many cats!');
} else if (answerFour === 'n' || answerFour === 'no') {
  //console.log('Actually I live with many cats. And I think I\'m only allergic to one, thank goodness.');
  alert('Actually I live with many cats. And I think I\'m only allergic to one, thank goodness.');
}

let answerFive = prompt('And finally: Have I ever visited Europe?').toLowerCase();

if (answerFive === 'y' || answerFive === 'yes') {
  //console.log(`Nope, I've never been to Europe, but I'd like to go! Well, that's it: thanks for taking my quiz ${userName}!`);
  alert(`Nope, I've never been to Europe, but I'd like to go! Well, that's it: thanks for taking my quiz ${userName}!`);
} else if (answerFive === 'n' || answerFive === 'no') {
  //console.log(`Sadly yes, I haven't been to Europe -- yet!! Well, that's it: thanks for taking my quiz ${userName}!`);
  alert(`Sadly yes, I haven't been to Europe -- yet!! Well, that's it: thanks for taking my quiz ${userName}!`);
}
