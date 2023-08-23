import { getAll, deleteById } from "../api/videojuegosEndPoint";

export const VJTableBody = ({ data, setApiData }) => {
  const onDelete = () => {
    deleteById(data.juegoId).then(() => {
      getAll().then((resp) => {
        setApiData(resp);
      });
    });
  };
  
  // Aplique destructuracion

  return (

    <tbody>
      <tr className="text-center">
        <td>{data.titulo}</td>
        <td>{data.plataforma}</td>
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