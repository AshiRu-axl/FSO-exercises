export const PersonForm = ({
  onSubmit,
  newNameValue,
  onNameChange,
  newNumberValue,
  onNumberChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newNameValue} onChange={onNameChange} />
      </div>
      <div>
        number: <input value={newNumberValue} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
