import { useState, useEffect } from "react";
export const Filter = ({
  persons,
  onFilteredPersons,
  inputValue,
  onInputChange,
}) => {
  const filterPersons = (name) => {
    const validatedName = name.trim().toLowerCase();

    const filteredPersons = persons.filter(({ name }) =>
      name.toLowerCase().includes(validatedName)
    );
    onFilteredPersons(filteredPersons);
  };

  useEffect(() => {
    filterPersons(inputValue);
  }, [inputValue]);

  return <input value={inputValue} onChange={onInputChange}></input>;
};
