import React, { useEffect, useState } from "react";
import { getAll } from "../api/api";
import { TableBody } from "../components/TableBody";
import { TableHead } from "../components/TableHead";
import { SearchForm } from "../components/SearchForm";

export const Autores = () => {
  const [getData, setGetData] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  useEffect(() => {
    getAll().then((resp) => {
      console.log(resp);
      setGetData(resp);
    });
  }, []);

  const onNewSearch = (newSearch) => {
    setSearchByName(newSearch);
  };

  console.log(searchByName);

  return (
    <div className="container">
      <SearchForm onNewSearch={(event) => onNewSearch(event)} />
      <div className="table-responsive-md">
        <table className="table table-hover">
          <TableHead />

          {getData
            .filter((data) => {
              return searchByName.toLowerCase() === ""
                ? data
                : data.name.toLowerCase().includes(searchByName);
            })
            .map((data) => {
              return (
                <TableBody key={data.id} data={data} setApiData={setGetData} />
              );
            })}
        </table>
      </div>
    </div>
  );
};
