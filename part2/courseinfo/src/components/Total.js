const Total = ({ parts }) => {
  const total = parts.reduce((totalEx, parts) => totalEx + parts.exercises, 0);
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  );
};

export default Total;
