import { Draft } from "immer";
import { useList } from "./useList";

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
