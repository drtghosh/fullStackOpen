import { useState } from "react";

const Button = ({ onClick, show }) => {
  return <button onClick={onClick}>{show}</button>;
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const total = good - bad;

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={total / all} />
          <StatisticLine text="positive" value={(100 * good) / all + " %"} />
        </tbody>
      </table>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const clickGood = () => setGood(good + 1);
  const clickNeutral = () => setNeutral(neutral + 1);
  const clickBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={clickGood} show="good" />
      <Button onClick={clickNeutral} show="neutral" />
      <Button onClick={clickBad} show="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
