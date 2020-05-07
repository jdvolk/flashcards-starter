const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  it('should be a function', () => {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round', () => {
    // setup:
      // instantiate new game class
      const game = new Game();
      // create the deck
      let testDeck = [];
      for (let i = 0; i < prototypeQuestions.length; i++) {
        let currentCard = prototypeQuestions[i];
        let id = currentCard.id;
        let question = currentCard.question;
        let answers = currentCard.answers;
        let correctAnswer = currentCard.correctAnswer;
        let constructedCard = new Card(id, question, answers, correctAnswer);
        testDeck.push(constructedCard);
      }
      testDeck = new Deck(testDeck);
      let expectedRound = new Round(testDeck)
      // execution: start game
      game.start();
      let actualRound = game.currentRound;
      // assertion: check that current round same as expected round;
      expect(actualRound).to.deep.equals(expectedRound);

  })



});

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