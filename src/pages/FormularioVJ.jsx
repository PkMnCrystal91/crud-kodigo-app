import { useForm } from "react-hook-form";
import { post, getAll } from "../api/videojuegosEndPoint";
import { useNavigate } from "react-router-dom";

export const FormularioVJ = () => {
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
        <input id="titulo" placeholder="titulo" required {...register("titulo")} />
        <br />
        <input
          id="descripcion"
          placeholder="descripcion "
          required
          {...register("descripcion")}
        />
        <br />
        <input
          id="plataforma"
          placeholder="plataforma "
          required
          {...register("plataforma")}
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
          id="categoria"
          placeholder="categoria"
          required
          {...register("categoria")}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
