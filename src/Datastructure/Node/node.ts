export class Node <T>{

    private next: Node<T> | null;
    private before: Node<T> | null ;
    private value: T;

    constructor(next: Node<T>|null, before: Node<T>|null, value: T){
        this.next = next;
        this.before = before;
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }

    public nextNode(): Node<T>|null {
        return this.next;
    }

    public beforeNode(): Node<T>|null {
        return this.before
    }
    
}