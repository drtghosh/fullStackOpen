function Hello(props) {
  return (
    <div>
      <p>
        Hello {props.name}. You got {props.time} minutes.
      </p>
    </div>
  );
}

function App() {
  console.log("Hello from the app component.");
  const dateNow = new Date();
  const timeRemaining = 30;
  return (
    <>
      <h1>Greetings fellow humans!</h1>
      <Hello name="Amy" time={timeRemaining + 5} />
      <Hello name="Leonard" time={timeRemaining} />
      <Hello name="Howard" time={timeRemaining + 15} />
      <p>It's {dateNow.toString()} now.</p>
    </>
  );
}

export default App;
