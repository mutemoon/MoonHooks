import { Draft } from "immer";
export declare const useList: <T>(initialValue: T[]) => {
    list: T[];
    update(condition: (item: Draft<T>) => boolean, editor: (item: Draft<T>) => void): void;
    delete(condition: (item: Draft<T>) => boolean): void;
    findOne(condition: (item: T) => boolean): T;
    findMany(condition: (item: T) => boolean): T[];
    push(item: T): void;
    pop(): void;
};
