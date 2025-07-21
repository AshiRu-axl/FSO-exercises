import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import {
  createPerson,
  getAll,
  deletePerson,
  updatePerson,
} from "./services/persons";
import SuccedMessage from "./components/SuccedMessage";

const updateObject = (newObject, array) =>
  array.map((value) => (value.id === newObject.id ? newObject : value));

const deleteObject = (id, array) => array.filter((value) => value.id !== id);

// ----------------------------------------------------------------------
const App = () => {
  //State variables

  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState({ type: null, text: null });
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  //Effects

  useEffect(() => {
    getAll()
      .then((personsList) => {
        setPersons(personsList);
      })
      .catch(() => console.error("Is the server running?"));
  }, []);

  //Event handlers

  const handleSearch = (event) => setSearchInput(event.target.value);
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const showMessage = (type, text) => {
    setMessage({ type: type, text: text });
    setTimeout(() => {
      setMessage({ type: null, text: null });
    }, 5000);
  };

  //Requests

  const handleDelete = (id, name) => {
    if (window.confirm(`Do you want to delete ${name} from the phone book?`)) {
      deletePerson(id)
        .then(() => {
          setPersons(deleteObject(id, persons));
        })
        .catch((error) =>
          showMessage(
            "error",
            `Information of ${name} has already been removed from server`
          )
        );
    }
    ("");
  };

  const updateExisting = () => {
    const personToUpdate = persons.find((person) => person.name === newName);
    const newPerson = { ...personToUpdate, number: newNumber };
    updatePerson(newPerson.id, newPerson)
      .then((returnedData) => {
        setPersons(updateObject(returnedData, persons));
        setNewName("");
        setNewNumber("");
        showMessage("succed", `Updated ${returnedData.name}`);
      })
      .catch(() => {
        console.error(`Failed to update ${newPerson.name}`);
      });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newNameExist = persons.some((person) => person.name === newName);
    const updateTextTemplate = `${newName} is already added to phonebook, replace the old number with a new one?`;

    if (newNameExist && window.confirm(updateTextTemplate)) {
      updateExisting();
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    createPerson(newPerson)
      .then((returnedData) => {
        setPersons(persons.concat(returnedData));
        showMessage("succed", `Added ${returnedData.name}`);
      })
      .catch(() => {
        console.error(`Failed to add new person ${newName}`);
      });

    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(searchInput.trim().toLowerCase())
  );

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter
        persons={persons}
        inputValue={searchInput}
        onInputChange={handleSearch}
      />
      <SuccedMessage type={message.type} text={message.text} />
      <h2>add a new</h2>

      <PersonForm
        onSubmit={addPerson}
        newNameValue={newName}
        onNameChange={handleNameChange}
        newNumberValue={newNumber}
        onNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} onDelete={handleDelete} />
    </div>
  );
};

export default App;
