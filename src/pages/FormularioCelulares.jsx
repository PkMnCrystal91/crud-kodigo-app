import { useForm } from "react-hook-form";
import { post } from "../api/celularesEndPoint";
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
  const navigate = useNavigate();

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
        <input
          id="marca"
          placeholder="Marca"
          name="marca"
          required
          {...register("marca")}
        />
        <br />
        <input
          id="modelo"
          placeholder="Modelo "
          name="modelo"
          required
          {...register("modelo")}
        />
        <br />
        <input
          id="color"
          placeholder="Color "
          name="color"
          required
          {...register("color")}
        />
        <br />
        <input
          id="precio"
          placeholder="Precio"
          name="precio"
          required
          type="number"
          {...register("precio")}
        />
        <br />
        <input
          id="descripcion"
          placeholder="Descripcion"
          name="descripcion"
          required
          {...register("descripcion")}
        />
        <br />
        <input
          id="operadora"
          placeholder="Operadora"
          name="operadora"
          required
          {...register("operadora")}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
