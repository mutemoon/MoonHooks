import { Draft } from "immer";
export declare const useListWithId: <T extends {
    id: any;
}, ID extends T extends {
    id: infer U;
} ? U : never>(initialValue: T[]) => {
    updateById(id: ID, editor: (item: Draft<T>) => void): void;
    deleteById(id: ID): void;
    deleteByItem({ id }: T): void;
    findById(id: ID): T;
    findManyById(id: ID): T[];
    list: T[];
    update(condition: (item: Draft<T>) => boolean, editor: (item: Draft<T>) => void): void;
    delete(condition: (item: Draft<T>) => boolean): void;
    findOne(condition: (item: T) => boolean): T;
    findMany(condition: (item: T) => boolean): T[];
    push(item: Draft<T>): void;
    pop(): void;
};
