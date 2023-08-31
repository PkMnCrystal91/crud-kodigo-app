import { getAll, deleteById } from "../api/celularesEndPoint";
import { FaRedoAlt, FaTrash } from "react-icons/fa";

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
            <button className="btn btn-primary"> <FaRedoAlt/>  Update</button>
            <button className="btn btn-danger" onClick={onDelete}>
             <FaTrash/> Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};
