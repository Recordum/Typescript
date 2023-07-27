export class Node <T>{

    public next: Node<T> | null;
    public prev: Node<T> | null ;
    private value: T;

    constructor(next: Node<T>|null, before: Node<T>|null, value: T){
        this.next = next;
        this.prev = before;
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }
    
}