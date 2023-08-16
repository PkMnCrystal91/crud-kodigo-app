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
      <tr>
        <td scope="row">{data.id}</td>
        <td>{data.name}</td>
        <td>{data.description}</td>
        <td>
          <div className="d-flex gap-2">
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
