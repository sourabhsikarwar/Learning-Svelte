export class Queue {
  private queue: number[];

  constructor() {
    this.queue = [];
  }
  enqueue(val: number) {
    this.queue.push(val);
  }
  dequeue() {
    return this.queue.shift();
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  print() {
    console.log(this.queue);
  }
  includes(val: number) {
    return this.queue.includes(val);
  }
}
