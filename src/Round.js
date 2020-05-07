const Card = require('./Card');
const Turn = require('./Turn');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.turnCount = 0;
    this.deck = deck;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turnCount]
  }
  takeTurn(guess) {
    if (guess === undefined) {
      return "please make a guess";
    }

    let currentTurn = new Turn(guess, this.returnCurrentCard());
    let isCorrect = currentTurn.giveFeedBack();
    if (isCorrect === 'incorrect') {
      let badGuess = currentTurn.returnCard();
      this.incorrectGuesses.push(badGuess.id);
    }
    this.turnCount ++;
    return isCorrect
  }
  calculatePercentageCorrect() {
   let amountOfIncorrect = this.incorrectGuesses.length;
   let percentageIncorrect = Math.floor(amountOfIncorrect * 100/this.turnCount);
   return 100 - percentageIncorrect;
  }
  endRound() {
    let resultPercentage = this.calculatePercentageCorrect();
    let resultMessage = `** Round over! ** You answered ${resultPercentage}% of the questions correctly!`
    console.log(resultMessage);
    return resultMessage;
  }
}
module.exports = Round;