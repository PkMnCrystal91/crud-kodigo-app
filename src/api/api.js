import axios from "axios";
const API_ENDPOINT_MOVIES = "http://localhost:3000/tests";

export const getAll = () => {
  const url = API_ENDPOINT_MOVIES;
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const deleteAuthor = (id) => {
  const url = API_ENDPOINT_MOVIES + `/${id}`;
  return axios
    .delete(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
