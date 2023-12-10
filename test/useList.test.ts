import { useList } from "../src/useList";

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

