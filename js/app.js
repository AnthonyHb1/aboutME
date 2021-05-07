'use strict'

function userName() {
let getUserName = prompt(" Hey! I reckon you're looking for Anthony, What's your name");
alert(" Welcome " + getUserName + ' prepare yourself to be challenged');
}

userName();

alert("Before you gain access, we must verify your knowledge of whom you have searched");

function myPet() {
  let pet = prompt('Does Anthony own a dog? (Please answer Yes or No)');
  if (pet.toLowerCase() === 'yes' || pet.toLowerCase() === 'y') { //this is you get an alternate answer. || = or
    alert('Lucky guess who doesnt these days');
  } else if (pet.toLowerCase() === 'no' || pet.toLowerCase() === 'n') {
    alert('Hmm thats sus... thats wrong');
  } else {
    alert('Maybe youre confused by the rules')
  } 
}
myPet();

function myLookAlike() {
  let lookALike = prompt('Does Anthony look like Eddie Murphy? (Please answer Yes or No)');
  if (lookALike.toLowerCase() === 'yes' || lookALike.toLowerCase() === 'y') {
    alert('Ok, so clearly you have jokes, No I dont');
  } else if (lookALike.toLowerCase() === 'no' || lookALike.toLowerCase() === 'n') {
    alert('You got that right lol the nerve of that question right');
  } else {
    alert('Maybe you\'re confused by the rules')
  }
}
myLookAlike()

function myHomeState() {
  let homeState = prompt('Is Anthony orginally from South? (Please answer Yes or No)');
  if (homeState.toLowerCase() === 'yes' || homeState.toLowerCase() === 'y') {
    alert('Thats right go dogs!!');
  } else if (homeState.toLowerCase() === 'no' || homeState.toLowerCase() === 'n') {
    alert('Wrong! So you dont hear that accent, ok ');
  } else {
    alert('Maybe you\'re confused by the rules')
  }
}
myHomeState();

function myFavTheory() {
  let myTheory = prompt('Do you think Anthony believes in the Hollow Earth Theory? (Please answer Yes or No)');
  if (myTheory.toLowerCase() === 'yes' || myTheory.toLowerCase() === 'y') {
    alert('Correct! Theres no way there isn\'t life inside this floating ball of air');
  } else if (myTheory.toLowerCase() === 'no' || myTheory.toLowerCase() === 'n') {
    alert('...ok you\'re starting to seem like an imposter');
  } else {
    alert('Maybe you\'re confused by the rules')
  }
}
myFavTheory();

function myHobby() {
  let myFavHobby = prompt('Is Anthony a fan of Art? (Please answer Yes or No)');
  if (myFavHobby.toLowerCase() === 'yes') {
    alert('Correct especially architectual and 3d models');
  } else if (myFavHobby.toLowerCase() === 'no') {
    alert('So clearly you dont know anything about him');
  } else {
    alert('Maybe you\'re confused by the rules')
  }
} 
myHobby();

function guessMovies() {
  let myFavMovies = ['Django Unchained', 'Wolf of Wallstreet', 'Lion King', 'Harry Potter', 'Lord of the Rings', 'Friday Series', 'Shrek', 'The Grinch'];

  let counter = 5;
  let theyGotItRight = false;
  while (theyGotItRight === false && counter > 0) {
      alert('you have ' + counter + ' guesses to get this question correct');
      // they get in the loop and I ask them the question
      let userGuess = prompt('Guess one of my favorite movies?');

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

  alert('These are all the possible correct answers ' + myFavMovies);
}
guessMovies();

function guessNumber(){
  let myNum = 13;
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
      alert('please use a valid number');
    }
  }
}
guessNumber();