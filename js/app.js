'use strict'

let getUserName = prompt(" Hey! I reckon you're looking for Anthony, What's your name");
alert(" Welcome " + getUserName + ' prepare yourself to be challenged');

alert("Before you gain access, we must verify your knowledge of whom you have searched");

let myPet = prompt('Does Anthony own a dog? (Please answer Yes or No)');
if (myPet === 'yes') {
  alert('Lucky guess who doesnt these days');
} else if (myPet === 'no') {
  alert('Hmm thats sus... thats wrong');
} else {
  alert('Maybe youre confused by the rules')
} 


let myLookALike = prompt('Does Anthony look like Eddie Murphy? (Please answer Yes or No)');
if (myLookALike === 'yes') {
  alert('Ok, so clearly you have jokes, No I dont');
} else if (myLookALike === 'no') {
  alert('You got that right lol the nerve of that question right');
} else {
  alert('Maybe you\'re confused by the rules')
}

let myHomeState = prompt('Is Anthony orginally from South? (Please answer Yes or No)');
if (myHomeState === 'yes') {
  alert('Thats right go dogs!!');
} else if (myHomeState === 'no') {
  alert('Wrong! So you dont hear that accent, ok ');
} else {
  alert('Maybe you\'re confused by the rules')
}

let myFavTheory = prompt('Do you think Anthony believes in the Hollow Earth Theory? (Please answer Yes or No)');
if (myFavTheory === 'yes') {
  alert('Correct! Theres no way there isn\'t life inside this floating ball of air');
} else if (myFavTheory === 'no') {
  alert('...ok you\'re starting to seem like an imposter');
} else {
  alert('Maybe you\'re confused by the rules')
}

let myHobby = prompt('Is Anthony a fan of Art? (Please answer Yes or No)');
if (myHobby === 'yes') {
  alert('Correct especially architectual and 3d models');
} else if (myHobby === 'no') {
  alert('So clearly you dont know anything about him');
} else {
  alert('Maybe you\'re confused by the rules')
}

let counter = 5;
let theyGotItRight = false;
while (theyGotItRight === false && counter > 0) {
    alert('you have ' + counter + ' guesses to get this question correct');
    // they get in the loop and I ask them the question
    let userGuess1 = prompt('Guess one of my favorite movies?');
    let userGuess = userGuess1.toLowerCase();

  // I check their guess against my list of movies
  for (let i = 0; i < myFavMovies.length; i++) {
    if (userGuess === myFavMovies[i]) {
      // if they get it right I tell them
      alert('You got it right!');
      // change they got it right to true
      theyGotItRight = true;
    } 
  }
  
  if (theyGotItRight === false) {
    alert('I am sorry you are incorrect, guess again');
  }
  // I did not decrement the counter!!!
  counter--;
}

let myFavMovies = ['Django Unchained', 'Wolf of Wallstreet', 'Lion King', 'Harry Potter', 'Lord of the Rings', 'Friday Series', 'Shrek', 'The Grinch'];

alert('These are all the possible correct answers ' + myFavMovies);

let myNum = 7;

for (let i = 0; i < 5; i++) {
  alert('You have this many guesses left ' + (5 - i));
  let userGuess = prompt('Pick a number any number between 1-20');
  let numericalGuess = parseInt(userGuess);
  console.log(numericalGuess);
  if (numericalGuess === myNum) {
    alert('Congratulations! You got it right!');
    break;
  } else if (numericalGuess > myNum) {
    alert('You guessed too high! Try again');
  } else if (numericalGuess < myNum) {
    alert('You guessed too low! Try again');
  } else {
    alert('please use a valid number')
  }
}