const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = "";
    this.currentDeck = "";
    this.roundCount = 0;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  currentRound() {
    return this.round;
  }
  
  start() {
    this.roundCount++;
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
  }
}

module.exports = Game;