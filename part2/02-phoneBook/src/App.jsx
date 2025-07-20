import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";

// ----------------------------------------------------------------------
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => setSearchInput(event.target.value);
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const newNameExist = persons.some((person) => person.name === newName);

    if (newNameExist) {
      alert(`${newName} already exist`);
      setNewName("");
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    const updatedPersons = persons.concat(newPerson);
    setPersons(updatedPersons);
    setNewName("");
    setNewNumber("");
    setFilteredPersons(updatedPersons);
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter
        persons={persons}
        onFilteredPersons={setFilteredPersons}
        inputValue={searchInput}
        onInputChange={handleSearch}
      />
      <h2>add a new</h2>

      <PersonForm
        onSubmit={addPerson}
        newNameValue={newName}
        onNameChange={handleNameChange}
        newNumberValue={newNumber}
        onNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
