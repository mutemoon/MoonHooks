# Moon Hooks

## useList

```ts
import { useList } from "./useList";

const { list: persons, ...personsHandler } = useList([
  {
    name: "Sam",
    city: "shanghai",
  },
]);

personsHandler.update(
  (person) => person.name == "Sam",
  (person) => {
    person.name = "Lee";
  }
);
```

## useListWithId

```ts
import { useListWithId } from "..";

const { list: persons, ...personsHandler } = useListWithId([
  {
    id: "user_123456",
    name: "Sam",
    city: "shanghai",
  },
]);

personsHandler.updateById("user_123456", (person) => {
  person.name = "Lee";
});
```