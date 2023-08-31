import React, { useEffect, useState } from "react";
import { getAll } from "../api/videojuegosEndPoint";
import { SearchForm } from "../components/SearchForm";
import { VJTableHead } from "../components/VJTableHead";
import { VJTableBody } from "../components/VJTableBody";
import { Link } from "react-router-dom";

export const VideoJuegos = () => {
  const [getData, setGetData] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  useEffect(() => {
    /* getAll().then((resp) => {
      console.log(resp);
      setGetData(resp);
    }); */

    getAll()
      .then((response) => {
        console.log(response);
        setGetData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onNewSearch = (newSearch) => {
    setSearchByName(newSearch);
  };

  console.log(searchByName);

  return (
    <div className="container">
      <SearchForm onNewSearch={(event) => onNewSearch(event)} />
      <Link to="/formulario-videojuegos">
        <button className="btn btn-success">New</button>
      </Link>
      <div className="table-responsive-md">
        <table className="table table-hover">
          <VJTableHead />

          {getData
            .filter((data) => {
              return searchByName.toLowerCase() === ""
                ? data
                : data.marca.toLowerCase().includes(searchByName);
            })
            .map((data) => {
              return (
                <VJTableBody
                  key={data.juegoId}
                  data={data}
                  setApiData={setGetData}
                />
              );
            })}
        </table>
      </div>
    </div>
  );
};