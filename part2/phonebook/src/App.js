import { useState } from "react";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const changeName = (event) => {
    setNewName(event.target.value);
  };
  const changeNumber = (event) => {
    setNewNumber(event.target.value);
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
        <Numbers numbers={persons} />
      </div>
    </div>
  );
};

export default App;
