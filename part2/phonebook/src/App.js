import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const personsToShow =
    filter.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  const changeName = (event) => {
    setNewName(event.target.value);
  };
  const changeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const changeFilter = (event) => {
    setFilter(event.target.value);
  };
  const addName = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newNameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      console.log("Added new name: ", { newName }, "with number: ", {
        newNumber,
      });
      setPersons(persons.concat(newNameObject));
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter changeFilter={changeFilter} />
      <h3>Add a new</h3>
      <PersonForm
        changeName={changeName}
        changeNumber={changeNumber}
        addName={addName}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
