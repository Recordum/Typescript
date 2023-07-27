import { List } from "../list-interface";
import { Node } from "../../Node/node";
export class LinkedList<T> implements List<T>{

    private head: Node<T> | null;
    private tail: Node<T> | null;
    private count: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    
    public prepend(value: T): void {
        const newNode = new Node(value);

        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }
    public append(value: T): void {
        const newNode = new Node(null, null, value);

    }
    Insert(value: T, index: number): void {
        throw new Error("Method not implemented.");
    }
    delete(value: T): void {
        throw new Error("Method not implemented.");
    }
    deleteHead(): void {
        throw new Error("Method not implemented.");
    }
    deleteTail(): void {
        throw new Error("Method not implemented.");
    }
    findIndex(value: T): number | null {
        throw new Error("Method not implemented.");
    }
    toArray(): [] {
        throw new Error("Method not implemented.");
    }
    fromArray(array: T[]): void {
        throw new Error("Method not implemented.");
    }
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    size(): number {
        throw new Error("Method not implemented.");
    }
    print(): void {
        throw new Error("Method not implemented.");
    }
 
}