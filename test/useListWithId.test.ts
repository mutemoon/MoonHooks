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
