const Card = require('./Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    return((this.card.correctAnswer === this.guess) ? true : false); 
  }
  giveFeedBack() {
    let isCorrectAnswer = this.evaluateGuess();
    // refactor to ternary operator
    if (isCorrectAnswer) {
      return "correct";
    } else {
      return "incorrect";
    }
  }
}


module.exports = Turn;