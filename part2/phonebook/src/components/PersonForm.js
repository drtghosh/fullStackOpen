const PersonForm = ({ changeName, changeNumber, addName }) => {
  return (
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
  );
};

export default PersonForm;
