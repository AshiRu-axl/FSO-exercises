import { useState } from "react";

const Title = ({ title }) => <h2>{title}</h2>;

//Button component
const Button = ({ title, onClick }) => (
  <button onClick={onClick}>{title}</button>
);

//StatisticLine component
const StatisticLine = ({ title, value, sign }) => (
  <tr>
    <td>{title}</td>
    <td>
      {value} {sign}
    </td>
  </tr>
);

//Statistics component
const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) return <p>No feedback given</p>;

  const total = good + bad + neutral;
  //if good: 1 neutral:0 and bad: -1
  const average = (good - bad) / total;
  const positivePercentage = (good * 100) / total;

  return (
    <>
      {/* Table for statisticLine elements */}
      <table>
        <tbody>
          <StatisticLine title="good" value={good} />
          <StatisticLine title="neutral" value={neutral} />
          <StatisticLine title="bad" value={bad} />
          <StatisticLine title="all" value={total} />
          <StatisticLine title="average" value={average} />
          <StatisticLine title="positive" value={positivePercentage} sign="%" />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Event handlers for each button

  const handleClickGood = () => setGood((prev) => prev + 1);
  const handleClickNeutral = () => setNeutral((prev) => prev + 1);
  const handleClickBad = () => setBad((prev) => prev + 1);
  return (
    <>
      <Title title="give feedback" />

      <Button onClick={handleClickGood} title="good" />
      <Button onClick={handleClickNeutral} title="neutral" />
      <Button onClick={handleClickBad} title="bad" />

      <Title title="statistics" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
