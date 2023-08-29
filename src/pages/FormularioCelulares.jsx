import React from "react";
import { useForm } from "react-hook-form";
import { post } from "../api/celularesEndPoint";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Formulario =()=> {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    post(data)
    .then((response) => {
      console.log(response);

    })
    .catch((error) => {
      console.log(error);
    });

    console.log(data)
  }

  console.log(errors);

  
  return (

    <div className="container">

 <form onSubmit={handleSubmit(onSubmit)}>
    <input id ="marca" placeholder="Marca"required {...register("marca")} />
    <br />
    <input id ="modelo"placeholder="Modelo " required {...register("modelo")} />
    <br />
    <input id ="color" placeholder="Color " required {...register("color")} />
    <br />
    <input id ="precio" placeholder="Precio" required type="number" {...register("precio")} />
    <br />
    <input id ="descripcion" placeholder="Descripcion"required {...register("descripcion")} />
    <br />
    <input id ="operadora" placeholder="Operadora" required {...register("operadora")} />
    <br />
    <input type="submit" />
  </form>
    </div>
    
  );

  
}