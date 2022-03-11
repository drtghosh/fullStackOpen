import { useState } from "react";

const Hello = ({ name, time }) => {
  const totalTime = 60;
  const timeSpent = () => {
    return totalTime - time;
  };

  return (
    <div>
      <p>
        Hello {name}. You have spent {timeSpent()} minutes. You have {time}{" "}
        minutes remaining.
      </p>
    </div>
  );
};

const Counter = ({ counter }) => <h1>Counter: {counter}</h1>;

const Button = ({ onClick, show }) => {
  return <button onClick={onClick}>{show}</button>;
};

const Choices = ({ all }) => {
  if (all.length === 0) {
    return <h3>Make your choice by clicking the right or wrong button</h3>;
  } else {
    return <h3>Your choices till now: {all.join(" ")}</h3>;
  }
};

const App = () => {
  console.log("Hello from the app component.");
  const dateNow = new Date();
  const timeRemaining = 30;

  const [counter, setCounter] = useState(0);
  const [right, rightCounter] = useState(0);
  const [wrong, wrongCounter] = useState(0);
  const [all, allCounter] = useState([]);
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);
  const handleRight = () => {
    allCounter(all.concat("✓"));
    rightCounter(right + 1);
  };
  const handleWrong = () => {
    allCounter(all.concat("X"));
    wrongCounter(wrong + 1);
  };

  return (
    <>
      <Counter counter={counter} />
      <Button onClick={increaseCounter} show="+" />
      <Button onClick={decreaseCounter} show="-" />
      <Button onClick={resetCounter} show="Reset" />
      <h2>Greetings fellow humans!</h2>
      <Hello name="Amy" time={timeRemaining + 5} />
      <Hello name="Leonard" time={timeRemaining} />
      <Hello name="Howard" time={timeRemaining + 15} />
      <p>It's {dateNow.toString()} now.</p>
      <p>Right choices: {right}</p>
      <Button onClick={handleRight} show="Right" />
      <Button onClick={handleWrong} show="Wrong" />
      <p>Wrong choices: {wrong}</p>
      <Choices all={all} />
    </>
  );
};

export default App;
