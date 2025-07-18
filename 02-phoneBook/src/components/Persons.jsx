export const Persons = ({ persons }) => {
  return (
    <>
      {persons.map(({ name, number }, index) => (
        <div key={index}>
          <span>{name}</span> <span>{number}</span>
        </div>
      ))}
    </>
  );
};
