import axios from "axios";
const baseUrl = "http://localhost:3001/persons/";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}${id}`);
};

const updatePerson = (id, newObject) => {
  const request = axios.put(`${baseUrl}${id}`, newObject);
  return request.then((response) => response.data);
};

export { getAll, createPerson, deletePerson, updatePerson };
