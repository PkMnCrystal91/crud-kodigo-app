import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { post, getById } from "../api/celularesEndPoint";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export const Formulario = () => {
  const [updateData, setUpdateData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getById(id).then((resp) => {
      setUpdateData(resp);
    });
  }, [id]);

  console.log(updateData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    post(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {id !== undefined ? (
          <div className="form-group">
            <label className="form-label">ID</label>
            <input className="form-control" value={id} readOnly disabled />
          </div>
        ) : (
          ""
        )}
        <input id="marca" placeholder="Marca" required {...register("marca")} />
        <br />
        <input
          id="modelo"
          placeholder="Modelo "
          required
          {...register("modelo")}
        />
        <br />
        <input
          id="color"
          placeholder="Color "
          required
          {...register("color")}
        />
        <br />
        <input
          id="precio"
          placeholder="Precio"
          required
          type="number"
          {...register("precio")}
        />
        <br />
        <input
          id="descripcion"
          placeholder="Descripcion"
          required
          {...register("descripcion")}
        />
        <br />
        <input
          id="operadora"
          placeholder="Operadora"
          required
          {...register("operadora")}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
