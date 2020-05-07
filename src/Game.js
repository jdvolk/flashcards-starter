const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = "";
    this.currentDeck = "";
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  currentRound() {
    // let round = new Round()
    return this.round;
  }
  start() {
    let createdDeck = [];
    for (let i = 0; i < prototypeQuestions.length; i++) {
      let currentCard = prototypeQuestions[i];
      let id = currentCard.id;
      let question = currentCard.question;
      let answers = currentCard.answers;
      let correctAnswer = currentCard.correctAnswer;
      let constructedCard = new Card(id, question, answers, correctAnswer);
      createdDeck.push(constructedCard);
    }
    let currentDeck = new Deck(createdDeck);
    this.currentDeck = currentDeck;
    let currentRound = new Round(currentDeck);
    this.currentRound = currentRound;
    this.printMessage(currentDeck, currentRound);
    this.printQuestion(currentRound);
  //     Creates Cards
  // Puts Cards in a Deck
  // Creates a new Round using the Deck
  // invokes printMessage to display the message in the CLI
  // invokes printQuestion to kick off our helper functions that allow interaction via the CLI
  // Note: The helper functions are all fleshed out and fit to work with classes/methods that meet the requirements in the past iterations.
  }
  startNewRound() {

  }
}

module.exports = Game;

/*
As you may have noticed, your Game class has two methods fleshed out already: printMessage and printQuestion. We are going to abandon testing for these methods - as the techniques for this type of testing are beyond the scope of this project.

Your Game class should meet these other requirements:
Should keep track of the currentRound
start: method that starts everything
Creates Cards
Puts Cards in a Deck
Creates a new Round using the Deck
invokes printMessage to display the message in the CLI
invokes printQuestion to kick off our helper functions that allow interaction via the CLI
Note: The helper functions are all fleshed out and fit to work with classes/methods that meet the requirements in the past iterations.

For example:

game.currentRound; // => Round {...} (The new Round object that has been instatiated)
HINT

Look at the file being run when we want to start the game. Think about where you need to invoke your Game.start method.
*/