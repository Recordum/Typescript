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
        this.count++;
        if (this.isInitialNode(newNode)){
            return;
        }

        newNode.next = this.head;
        this.head!.prev = newNode;

        this.head = newNode;
    }
    public append(value: T): void {
        const newNode = new Node(value);
        this.count++;
        if (this.isInitialNode(newNode)){
            return;
        }

        newNode.prev = this.tail;
        this.tail!.next = newNode;

        this.tail = newNode;
    }
    public find(index: number): T | null {
        let node = this.head;
        let currentIndex = 0;
        if (index > this.size() - 1){
            throw new Error("Index Out of Bound");
        }
        while(true){
            if (node === null){
                throw new Error("Index Out of Bound");
            }
            if (index === currentIndex){
                return node.getValue();
            }
            currentIndex += 1;
            node = node.next;
        }
    }

    IndexOf(value: T): number | null {
        let node = this.head;
        let currentIndex = 0;
        while(true){
            if (node === null){
                throw new Error("Index of your value not found");
            }
            if (value === node.getValue()){
                return currentIndex;
            }
            currentIndex += 1;
            node = node.next;
        }
    }

    delete(value: T): void {
        throw new Error("Method not implemented.");
    }

    pop(): void {
        throw new Error("Method not implemented.");
    }
    unshift(): void {
        throw new Error("Method not implemented.");
    }
   
    Insert(value: T, index: number): void {
        throw new Error("Method not implemented.");
    }
    
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }

   

    public size(): number {
        return this.count;
    }
  

    private isInitialNode(newNode:Node<T>): boolean{
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
            return true
        }
        return false;
    }
 
}