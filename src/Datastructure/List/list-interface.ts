export interface List<T> {
    prepend(value: T): void;
    append(value: T): void;
    delete(value: T): void;
    pop(): void;
    unshift(): void;
    Insert(value: T, index: number): void;
    IndexOf(value:T): number | null;
    find(index: number): T | null;
    isEmpty(): boolean;
    size(): number;
}