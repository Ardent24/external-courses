function Calculator() {
  this.compute = 0;

  this.add = (value = 0) => {
    this.compute += value;

    return this;
  };

  this.subtract = (value = 0) => {
    this.compute -= value;

    return this;
  };

  this.divide = (value = 1) => {
    this.compute /= value;

    return this;
  };

  this.multiply = (value = 1) => {
    this.compute *= value;

    return this;
  };

  this.reset = () => {
    this.compute = 0;

    return this;
  };

  this.getResult = () => {
    return this.compute;
  };

  this.setState = (state = 0) => {
    this.compute = state;

    return this;
  };

  this.fetchData = (callback) => {
    setTimeout(() => callback.bind(this, 500)(), 1000);

    return this;
  };
}

const calculator = new Calculator();

module.exports = calculator;
