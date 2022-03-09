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

const App = () => {
  console.log("Hello from the app component.");
  const dateNow = new Date();
  const timeRemaining = 30;
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 3000);
  console.log("Rendering...", counter);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h2>Greetings fellow humans!</h2>
      <Hello name="Amy" time={timeRemaining + 5} />
      <Hello name="Leonard" time={timeRemaining} />
      <Hello name="Howard" time={timeRemaining + 15} />
      <p>It's {dateNow.toString()} now.</p>
    </>
  );
};

export default App;
