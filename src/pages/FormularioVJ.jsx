import { useForm } from "react-hook-form";
import { post, getAll } from "../api/videojuegosEndPoint";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {IoArrowRedoCircleOutline} from "react-icons/io5";

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
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
       <Form.Group  
        className="mb-3">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
        placeholder="Descripcion" 
        id="descripcion"  
        required {...register("descripcion")}/>
       </Form.Group>

       <Form.Group  
        className="mb-3">
        <Form.Label>titulo</Form.Label>
        <Form.Control
        placeholder="titulo" 
        id="titulo"  
        required {...register("titulo")}/>
       </Form.Group>

       <Form.Group  
        className="mb-3">
        <Form.Label>plataforma</Form.Label>
        <Form.Control
        placeholder="plataforma" 
        id="plataforma"  
        required {...register("plataforma")}/>
       </Form.Group>

       <Form.Group  
        className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
        placeholder="Precio" 
        id="Precio"  
        required {...register("Precio")}/>
       </Form.Group>
       
       <Form.Group  
        className="mb-3">
        <Form.Label>categoria</Form.Label>
        <Form.Control
        placeholder="categoria" 
        id="categoria"  
        required {...register("categoria")}/>
       </Form.Group>
       
       <Button variant="primary" type="submit">Enviar <
IoArrowRedoCircleOutline/>
      </Button>
      </form>
    </div>
    
  );
};
