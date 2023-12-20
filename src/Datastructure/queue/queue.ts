import { Node } from '../node/node';

export interface Queue<T> {
  enqueue(value: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
}

export class MyQueue<T> implements Queue<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  size: number = 0;

  enqueue(value: T): void {
    const node = new Node(value);
    this.size += 1;
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }
    
    this.tail.next = node;
    this.tail = this.tail.next;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    
    this.size -= 1;
    const pop = this.head;
    this.head = this.head.next;
    return pop.getValue();
  }

  peek(): T | undefined {
    return this.head?.getValue();
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
