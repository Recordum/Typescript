import { Node } from '../node/node';

export interface Stack<T> {
  pop(): T | undefined;
  push(value: T): void;
  peek(): T | undefined;
  isEmpty(): boolean;
}

export class MyStack<T> implements Stack<T> {
  top: Node<T> | null = null;
  size: number = 0;

  pop(): T | undefined {
    if (!this.top) {
      return undefined;
    }

    this.size -= 1;

    const popNode = this.top;
    this.top = this.top.next;
    popNode.next = null;

    return popNode.getValue();
  }

  push(value: T): void {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  peek(): T | undefined {
    return this.top?.getValue();
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
