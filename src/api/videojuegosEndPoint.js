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

export const getById = (id) => {
  const url = `${API_ENDPOINT_VIDEOJUEGOS}/${id}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const post = async ({
  titulo,
  descripcion,
  plataforma,
  precio: Number,
  categoria,
}) => {
  const url = API_ENDPOINT_VIDEOJUEGOS;
  const data = await axios.post(url, {
    titulo,
    descripcion,
    plataforma,
    precio: Number,
    categoria,
  });
  return data;
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

export const updateData = (data) => {
  const url = API_ENDPOINT_VIDEOJUEGOS;

  return axios
    .put(url, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};