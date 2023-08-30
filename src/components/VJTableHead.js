import React from "react";
import { FaRedoAlt, FaTrash } from "react-icons/fa";

export const VJTableHead = () => {
  // Style for Update and Delete Icons in Header to center them with their respective buttons.
  const iconStyle = {
    marginRight: '36px',
    marginLeft: '36px',
  };
  
  return (
    <thead>
      <tr className="text-center">
        <th scope="col">Titulo</th>
        <th scope="col">Plataforma</th>
        <th scope="col">Precio</th>
        <th scope="col">
          <div className="d-flex gap-2 justify-content-center">
            <FaRedoAlt style={iconStyle}/>
            <FaTrash style={iconStyle}/>
          </div>
        </th>
      </tr>
    </thead>
  );
};
