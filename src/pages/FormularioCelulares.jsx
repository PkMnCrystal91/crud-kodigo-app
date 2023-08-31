import { useForm } from "react-hook-form";
import { post, getAll } from "../api/celularesEndPoint";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {IoArrowRedoCircleOutline} from "react-icons/io5";

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
    
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group  
        className="mb-3" 
        controlId="formBasicEmail">
        <Form.Label>Marca</Form.Label>
        <Form.Control
         placeholder="Marca" 
         id="marca"  
         required {...register("marca")}/>
      </Form.Group>

      <Form.Group 
        className="mb-3" 
        controlId="formBasicEmail">
        <Form.Label>Modelos</Form.Label>
        <Form.Control
         placeholder="Modelo" 
         id="modelo"  
         required {...register("modelo")}/>
      </Form.Group>

        <Form.Group 
        className="mb-3" 
        controlId="formBasicEmail">
        <Form.Label>Color</Form.Label>
        <Form.Control
         placeholder="Color" 
         id="color"  
         required {...register("color")}/>
      </Form.Group>

      <Form.Group 
        className="mb-3" 
        controlId="formBasicEmail">
        <Form.Label>Precio</Form.Label>
        <Form.Control
         placeholder="Precio" 
         id="precio"
         type="number"  
         required {...register("precio")}/>
      </Form.Group>

      <Form.Group 
        className="mb-3" 
        controlId="formBasicEmail">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
         placeholder="Descripcion" 
         id="descripcion"
         required {...register("descripcion")}/>
      </Form.Group>
        
      <Form.Group 
        className="mb-3" 
        controlId="formBasicEmail">
        <Form.Label>Operadora</Form.Label>
        <Form.Control
         placeholder="Operadora" 
         id="operadora"
         required {...register("operadora")}/>
      </Form.Group>
      <Button variant="primary" type="submit">Enviar <
IoArrowRedoCircleOutline/>
      </Button>
      </form>
    </div>
  );
};