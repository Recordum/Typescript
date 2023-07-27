import { List } from "../list-interface";

export class LinkedList<T> implements List<T>{
    prepend(value: T): void {
        throw new Error("Method not implemented.");
    }
    append(value: T): void {
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