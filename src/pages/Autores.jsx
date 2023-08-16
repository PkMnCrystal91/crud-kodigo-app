import React, { useEffect, useState } from "react";
import { getAll } from "../api/api";
import { TableBody } from "../components/TableBody";
import { TableHead } from "../components/TableHead";
import { SearchForm } from "../components/SearchForm";

export const Autores = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    getAll().then((resp) => {
      console.log(resp);
      setGetData(resp);
    });
  }, []);

  return (
    <div className="container">
      <SearchForm />
      <div className="table-responsive-md">
        <table className="table table-hover">
          <TableHead />

          {getData.map((data) => {
            return (
              <TableBody key={data.id} data={data} setApiData={setGetData} />
            );
          })}
        </table>
      </div>
    </div>
  );
};
