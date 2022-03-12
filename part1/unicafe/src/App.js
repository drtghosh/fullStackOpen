import { useState } from "react";

const Button = ({ onClick, show }) => {
  return <button onClick={onClick}>{show}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const clickGood = () => setGood(good + 1);
  const clickNeutral = () => setNeutral(neutral + 1);
  const clickBad = () => setBad(bad + 1);
  const all = good + neutral + bad;
  const total = good - bad;
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={clickGood} show="good" />
      <Button onClick={clickNeutral} show="neutral" />
      <Button onClick={clickBad} show="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {total / all}</p>
      <p>positive {(100 * good) / all} %</p>
    </div>
  );
};

export default App;
