import { useEffect, useState } from "react";
import { getById, updateData } from "../api/videojuegosEndPoint";
import { useParams, useNavigate } from "react-router-dom";

export const UpdateVJForm = () => {
  const [info, setInfo] = useState({
    id: "",
    titulo: "",
    descripcion: "",
    plataforma: "",
    precio: 0,
    categoria: "",
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
          id="titulo"
          placeholder="titulo"
          name="titulo"
          value={info.titulo}
          onChange={onInputChange}
          required
        />
        <br />
        <input
          id="descripcion"
          placeholder="descripcion "
          name="descripcion"
          value={info.descripcion}
          onChange={onInputChange}
          required
        />
        <br />
        <input
          id="plataforma"
          placeholder="plataforma "
          name="plataforma"
          value={info.plataforma}
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
          id="categoria"
          placeholder="categoria"
          name="categoria"
          value={info.categoria}
          onChange={onInputChange}
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
