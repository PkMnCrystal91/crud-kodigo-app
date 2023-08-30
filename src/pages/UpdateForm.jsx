import { useEffect, useState } from "react";
import { getById, updateData } from "../api/celularesEndPoint";
import { useParams, useNavigate } from "react-router-dom";

export const UpdateForm = () => {
  const [info, setInfo] = useState({
    id: "",
    marca: "",
    modelo: "",
    color: "",
    precio: 0,
    descripcion: "",
    operadora: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getById(id).then((response) => {
      setInfo(response);
    });
  }, [id]);

  console.log(info);

  const onSubmit = (event) => {
    event.preventDefault();

    updateData(info);
    navigate("/");
  };

  const onInputChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        {/* <input
          id="id"
          placeholder="Id"
          name="id"
          value={info.celularId}
          readOnly
          disabled
          required
        />
        <br /> */}
        <input
          id="marca"
          placeholder="Marca"
          name="marca"
          value={info.marca}
          onChange={onInputChange}
          required
        />
        <br />
        <input
          id="modelo"
          placeholder="Modelo "
          name="modelo"
          value={info.modelo}
          onChange={onInputChange}
          required
        />
        <br />
        <input
          id="color"
          placeholder="Color "
          name="color"
          value={info.color}
          onChange={onInputChange}
          required
        />
        <br />
        <input
          id="precio"
          placeholder="Precio"
          name="precio"
          type="number"
          value={info.precio}
          onChange={onInputChange}
          required
        />
        <br />
        <input
          id="descripcion"
          placeholder="Descripcion"
          name="descripcion"
          value={info.descripcion}
          onChange={onInputChange}
          required
        />
        <br />
        <input
          id="operadora"
          placeholder="Operadora"
          name="operadora"
          value={info.operadora}
          onChange={onInputChange}
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
