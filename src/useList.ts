import { Draft } from "immer";
import { useImmer } from "use-immer";

export const useList = <T>(initialValue: T[]) => {
  const [list, setList] = useImmer(initialValue);

  type Condition = (item: T) => boolean;

  return {
    list,
    update(
      condition: (item: Draft<T>) => boolean,
      editor: (item: Draft<T>) => void
    ) {
      setList((list) => {
        const item = list.find(condition);
        if (item) editor(item);
      });
    },
    delete(condition: Condition) {
      setList(list.filter((item) => !condition(item)));
    },
    findOne(condition: Condition) {
      return list.find(condition);
    },
    findMany(condition: Condition) {
      return list.filter(condition);
    },
    push(item: T) {
      setList((list) => {
        list.push(item as Draft<T>);
      });
    },
    pop() {
      setList((list) => {
        list.pop();
      });
    },
  };
};

export const useListWithId = <
  T extends { id: any },
  ID extends T extends { id: infer U } ? U : never
>(
  initialValue: T[]
) => {
  const handler = useList(initialValue);

  return {
    ...handler,
    updateById(id: ID, editor: (item: Draft<T>) => void) {
      handler.update((item) => item.id === id, editor);
    },
    deleteById(id: ID) {
      handler.delete((item) => item.id === id);
    },
    deleteByItem({ id }: T) {
      handler.delete((item) => item.id === id);
    },
    findById(id: ID) {
      return handler.findOne((item) => item.id === id);
    },
    findManyById(id: ID) {
      return handler.findMany((item) => item.id === id);
    },
  };
};
