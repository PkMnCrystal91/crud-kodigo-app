import axios from "axios";
const API_ENDPOINT_VIDEOJUEGOS =
  "https://denny2023.azurewebsites.net/api/juegos";

export const getAll = () => {
  const url = API_ENDPOINT_VIDEOJUEGOS;
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const deleteById = (id) => {
  const url = `${API_ENDPOINT_VIDEOJUEGOS}?id=${id}`;

  return axios
    .delete(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};