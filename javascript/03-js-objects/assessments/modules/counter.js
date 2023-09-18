class Counter {
  constructor() {
    this.num = 0;
  }

  increment() {
    this.num++;
  }

  decrement() {
    this.num--;
  }

  toString() {
    return 'Ball count: ' + this.num;
  }
}

export { Counter };
