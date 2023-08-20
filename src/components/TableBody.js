import { useEffect } from "react";
import { deleteAuthor, getAll } from "../api/api";

export const TableBody = ({ data, setApiData }) => {
  const onDelete = () => {
    deleteAuthor(data.id).then(() => {
      getAll().then((resp) => {
        setApiData(resp);
      });
    });
  };

  return (
    <tbody>
      <tr className="text-center">
        {/* <td scope="row">{data.id}</td> */}
        <td>{data.marca}</td>
        <td>{data.modelo}</td>
        <td>{data.precio}</td>

        <td>
          <div className="d-flex gap-2 justify-content-center">
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};
