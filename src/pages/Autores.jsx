import React, { useEffect, useState } from "react";
import { getAll } from "../api/celularesEndPoint";
import { TableBody } from "../components/TableBody";
import { TableHead } from "../components/TableHead";
import { SearchForm, Buttons } from "../components";

export const Autores = () => {
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
      <Buttons/> 
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
