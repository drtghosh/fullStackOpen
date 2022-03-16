import { useState } from "react";
import Numbers from "./components/Numbers";

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
      const newNameObject = { name: newName, number: newNumber };
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
      <div>
        filter shown with <input onChange={changeFilter} />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input onChange={changeName} />
        </div>
        <div>
          number: <input onChange={changeNumber} />
        </div>
        <div>
          <button type="submit" onClick={addName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <Numbers numbers={personsToShow} />
      </div>
    </div>
  );
};

export default App;
