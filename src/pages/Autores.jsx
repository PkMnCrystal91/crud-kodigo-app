import React, { useEffect, useState } from "react";
import { getAll } from "../api/celularesEndPoint";
import { TableBody } from "../components/TableBody";
import { TableHead } from "../components/TableHead";
import { SearchForm } from "../components";
import { Link } from "react-router-dom";
import { BiAlignJustify } from "react-icons/bi";
import Button from 'react-bootstrap/Button';

export const Autores = () => {
  const [getData, setGetData] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  useEffect(() => {
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

  return (
    <div className="container">
      <SearchForm onNewSearch={(event) => onNewSearch(event)} />
      <Link to="/formulario">
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        New
      </Button>
    </div>
      </Link>
      <div className="table-responsive-md">
        <table className="table table-hover">
          <TableHead />

          {getData
            .filter((data) => {
              return searchByName.toLowerCase() === ""
                ? data
                : data.marca.toLowerCase().includes(searchByName);
            })
            .map((data) => {
              return (
                <TableBody
                  key={data.celularId}
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
