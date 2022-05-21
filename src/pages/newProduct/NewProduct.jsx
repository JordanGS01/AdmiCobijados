import { useState } from "react";
import "./newProduct.css";
import {v4 as uuidv4} from 'uuid'
import { insertNewProduct } from "../../FireStore/dbInitialize";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function NewProduct() {
  //<input type="file" id="file" />   <<----OJO
  const [imagen,setImagen] = useState('');
  const [nombre,setNombre] = useState('');
  const [talla,setTalla] = useState('');
  const [cantidad,setCantidad] = useState(0);
  const [precio,setPrecio] = useState(0);
  const [categoria,setCategoria] = useState('');
  const [descripcion,setDescripcion] = useState('');
  const [marca,setMarca] = useState('');

  function handleOnSubmit(e){
    e.preventDefault();
    addData();
    
  }

  function addData(){
    console.log(imagen)
    console.log(nombre)
    console.log(talla)
    console.log(categoria)
    console.log(precio)
    if(imagen !== '' &&
       nombre !== '' &&
       talla  !== '' &&
       categoria !== '' &&      
       precio !== 0 ){
         const product = {
           cantidad: cantidad,
           categoria: categoria,
           descripcion: descripcion,
           img: imagen,
           nombre: nombre,
           precio: precio,
           talla: talla,
           marca: marca
         }
         insertNewProduct(product,'Productos');
        
         //Ahora se resetean los valores de las variables
         setImagen('');
         setNombre('');
         setTalla('');
         setMarca('');
         setCantidad(0);
         setPrecio(0);
         setCategoria('');
         setDescripcion('');

         //TODO: Imprimir un msj donde especifique si se tuvo exito o no en la inserción
         //TODO: Vaciar los inputs (visuales de la página) cuando se haya hecho una inserción exitosa
         //TODO: Analizar qué otras validaciones hacer a los datos al insertar
       }
       else{
         console.log("Datos incompletos")
       }
    //TODO: Crear función de Firebase para agregar los datos
    //TODO: Agregar los datos
  }
  
  /*Con esta función se maneja el cambio de los estados de todos los
  inputs del formulario*/
  function handleOnChange(e){
    const value = e.target.value;
    if(e.target.name === 'img'){
      setImagen(value);
    }
    else if(e.target.name === 'nombre'){
      setNombre(value);
    }
    else if(e.target.name === 'talla'){
      setTalla(value);
    }
    else if(e.target.name === 'cantidad'){
      setCantidad(value);
    }
    else if(e.target.name === 'precio'){
      setPrecio(value);
    }
    else if(e.target.name === 'categoria'){
      setCategoria(value);
    }
    else if(e.target.name === 'descripcion'){
      setDescripcion(value);
    }
    else if(e.target.name === 'marca'){
      setMarca(value);
    }
  }

  return (
    <div className="d-inline-flex p-2 flex-column border rounded justify-content-center">
      <h1 className="display-2">Nuevo Producto</h1>
      <Form onSubmit={handleOnSubmit}>
        <div className="NewProduct-DivDisplay">
          <Form.Group className='mb-3 DivDisplay-ImgField' controlId='productFormImg'>
            <Form.Label>Imagen</Form.Label>
            <Form.Control name='img' type='text' placeholder='URL de la imágen' onChange={handleOnChange} required/>
          </Form.Group>
          <img src={imagen} className="imgaa"/>
        </div>
        <Form.Group className='mb-3' controlId='productFormNombre'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control name='nombre' type='text' placeholder='Nombre' onChange={handleOnChange} required/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormTalla'>
          <Form.Label>Talla</Form.Label>
          <Form.Select name='talla' onChange={handleOnChange}>
            <option value="" selected></option>
            <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormCantidad'>
          <Form.Label>Cantidad</Form.Label>
          <Form.Control name='cantidad' type='number' placeholder='Cantidad' onChange={handleOnChange} required/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormPrecio'>
          <Form.Label>Precio</Form.Label>
          <Form.Control name='precio' type='number' placeholder='Precio' onChange={handleOnChange} required/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormMarca'>
          <Form.Label>Marca</Form.Label>
          <Form.Control name='marca' type='text' placeholder='Precio' onChange={handleOnChange} required/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormCategoria'>
          <Form.Label>Categoría</Form.Label>
          <Form.Select name='categoria' onChange={handleOnChange}>
            <option value="" selected></option>
            <option value="Adulto">Adultos</option>
            <option value="Niños">Niños</option>
            <option value="Jovenes">Jovenes</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="productFormDescripción">
          <Form.Label>Descripción</Form.Label>
          <Form.Control name="descripcion" as="textarea" rows={3} />
        </Form.Group>        

        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>      
    </div>
  );
}
