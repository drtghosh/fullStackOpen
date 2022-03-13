import { useState } from "react";

const Button = ({ handleClick, show }) => {
  return <button onClick={handleClick}>{show}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const totalAnecdotes = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(totalAnecdotes).fill(0));
  const clickAnecdote = () => {
    const newSelection = Math.floor(Math.random() * totalAnecdotes);
    console.log(newSelection);
    setSelected(newSelection);
  };
  const clickVote = () => {
    const voteCopy = [...votes];
    voteCopy[selected] += 1;
    setVotes(voteCopy);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={clickVote} show="vote" />
      <Button handleClick={clickAnecdote} show="next anecdote" />
    </div>
  );
};

export default App;
