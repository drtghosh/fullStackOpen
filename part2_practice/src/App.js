import { useState } from "react";
import Note from "./components/Note";

const App = ({ notes }) => {
  const [oldNotes, setNotes] = useState(notes);
  const [newNote, setNew] = useState("New Note");
  const [showAll, setShow] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const newNoteObject = {
      id: oldNotes.length + 1,
      content: newNote,
      date: new Date().toISOString,
      important: Math.random() < 0.5,
    };
    console.log(
      "New note submitted",
      newNote,
      "is it important?",
      newNoteObject.important
    );
    setNotes(oldNotes.concat(newNoteObject));
    setNew("");
  };
  const changeNew = (event) => {
    console.log(event.target.value);
    setNew(event.target.value);
  };
  const toggleShow = () => setShow(!showAll);
  const notesToShow = showAll
    ? oldNotes
    : oldNotes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={toggleShow}>show {showAll ? "important" : "all"}</button>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={changeNew} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
