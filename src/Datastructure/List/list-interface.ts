export interface List<T> {
    prepend(value: T): void;
    append(value: T): void;
    delete(value: T): void;
    deleteHead(): void;
    deleteTail(): void;
    findIndex(value:T): number|null;
    toArray(): [];
    fromArray(array: T[]):void;
    isEmpty(): boolean;
    size(): number;
    print(): void;
}