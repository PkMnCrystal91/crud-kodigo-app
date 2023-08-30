import axios from "axios";
const API_ENDPOINT_CELULARES =
  "https://denny2023.azurewebsites.net/api/celulares";

export const getAll = () => {
  const url = API_ENDPOINT_CELULARES;
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getById = (id) => {
  const url = `${API_ENDPOINT_CELULARES}/${id}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const post = async ({
  marca,
  modelo,
  color,
  precio: Number,
  descripcion,
  operadora,
}) => {
  const url = API_ENDPOINT_CELULARES;
  const data = await axios.post(url, {
    marca,
    modelo,
    color,
    precio: Number,
    descripcion,
    operadora,
  });
  return data;
};

export const deleteById = (id) => {
  const url = `${API_ENDPOINT_CELULARES}?id=${id}`;

  return axios
    .delete(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const updateData = (data) => {
  const url = API_ENDPOINT_CELULARES;

  return axios
    .put(url, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
