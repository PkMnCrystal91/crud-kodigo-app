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
