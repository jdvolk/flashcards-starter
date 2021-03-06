const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it(('should take in an array with instances of card class'), () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.be.an('array').that.includes(card1);
    expect(deck.cards).to.be.an('array').that.includes(card2);
    expect(deck.cards).to.be.an('array').that.includes(card3);

    expect(deck.cards[0]).to.be.an.instanceof(Card, "it should be an instance of the card class");
    expect(deck.cards[1]).to.be.an.instanceof(Card, "it should be an instance of the card class");
    expect(deck.cards[2]).to.be.an.instanceof(Card, "it should be an instance of the card class");

    let testDeck = [card1, card2, card3];
    assert.deepEqual(deck.cards, testDeck, "should be the same array")

  });

  it(('should count how many cards are in the deck'), () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    let count = deck.countCards(); // => 3
    expect(count).to.equal(3, 'should equal 3 cards in the deck')
  });
})