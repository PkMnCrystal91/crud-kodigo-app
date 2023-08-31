import React from "react";

export const TableHead = () => {
  return (
    <thead>
      <tr className="text-center">
        <th scope="col">Marca</th>
        <th scope="col">Modelo</th>
        <th scope="col">Precio</th>
        <th scope="col">Update & Delete</th>
        <th scope="col"></th>
      </tr>
    </thead>
  );
};
