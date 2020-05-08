const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  it('should be a function', () => {
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