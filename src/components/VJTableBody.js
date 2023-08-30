import { Link } from "react-router-dom";
import { getAll, deleteById } from "../api/videojuegosEndPoint";

export const VJTableBody = ({ data, setApiData }) => {
  const onDelete = () => {
    deleteById(data.juegoId).then(() => {
      getAll().then((resp) => {
        setApiData(resp);
      });
    });
  };
  

  return (

    <tbody>
      <tr className="text-center">
        <td>{data.titulo}</td>
        <td>{data.plataforma}</td>
        <td>{data.precio}</td>

        <td>
          <div className="d-flex gap-2 justify-content-center">
          <Link to={`/formulario-videojuegos/${data.juegoId}`}>
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