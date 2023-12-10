import { Draft } from "immer";
import { useImmer } from "use-immer";

export const useList = <T>(initialValue: T[]) => {
  const [list, setList] = useImmer(initialValue);

  type DraftCondition = (item: Draft<T>) => boolean;
  type Condition = (item: T) => boolean;

  return {
    list,
    update(
      condition: DraftCondition,
      editor: (item: Draft<T>) => void
    ) {
      setList((list) => {
        const item = list.find(condition);
        if (item) editor(item);
      });
    },
    delete(condition: DraftCondition) {
      setList(list => list.filter((item) => !condition(item)));
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