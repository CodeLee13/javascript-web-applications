class CounterModel {
  constructor() {
    this.counter = 0;
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }
}

console.log()

module.exports = CounterModel;
