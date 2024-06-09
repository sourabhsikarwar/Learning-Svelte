import type { TPosition } from "../types";

export class Queue {
  private queue: TPosition[];

  constructor() {
    this.queue = [];
  }
  enqueue(val: TPosition) {
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
}
