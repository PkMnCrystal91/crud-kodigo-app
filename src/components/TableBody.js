import { Link } from "react-router-dom";
import { getAll, deleteById } from "../api/celularesEndPoint";

export const TableBody = ({ data, setApiData }) => {
  const onDelete = () => {
    deleteById(data.celularId).then(() => {
      getAll().then((resp) => {
        setApiData(resp);
      });
    });
  };

  return (
    <tbody>
      <tr className="text-center">
        <td>{data.marca}</td>
        <td>{data.modelo}</td>
        <td>{data.precio}</td>

        <td>
          <div className="d-flex gap-2 justify-content-center">
            <Link to={`/formulario/${data.celularId}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
            <button className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};
