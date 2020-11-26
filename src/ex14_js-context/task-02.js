class Hangman {

  constructor(word) {
    this.word = word;
    this.arrayWord = word.split('');
    this.arrayHyphen = this.arrayWord.map(el => '_');
    this.error = 6;
    this.arrayError = [];
  }

  guess(value) {
    if (this.arrayWord.includes(value)) {
      this.arrayWord.forEach((el, index) => {
        if (el === value) this.arrayHyphen[index] = el;
      });
      this.getGuessedString();
    }
    if (!this.arrayWord.includes(value)) {
      this.arrayError.push(value)
      this.error--;
      console.log(`wrong letter, errors left ${this.error} | ${this.arrayError}`);
    }

    return this;
  }

  getGuessedString() {
    return this.arrayHyphen.join('');
  }

  getErrorsLeft() {
    return this.error;
  }

  getWrongSymbols() {
    return this.arrayError;
  }

  getStatus() {
    return `${this.arrayHyphen.join('')} | errors left ${this.error}`;
  }

  startAgain(value) {
    this.word = value;
    this.arrayWord = value.split('');
    this.arrayHyphen = this.arrayWord.map(el => '_');
    this.error = 6;
    this.arrayError = [];

    return this;
  }
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
