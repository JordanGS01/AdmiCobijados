import { useState } from "react";
import "./newProduct.css";
import {v4 as uuidv4} from 'uuid'
import { insertNewProduct } from "../../FireStore/dbInitialize";

export default function NewProduct() {
  //<input type="file" id="file" />   <<----OJO
  const [imagen,setImagen] = useState('');
  const [nombre,setNombre] = useState('');
  const [genero,setGenero] = useState('');
  const [talla,setTalla] = useState('');
  const [cantidad,setCantidad] = useState(0);
  const [precio,setPrecio] = useState(0);
  const [coleccion,setColeccion] = useState('');
  const [descripcion,setDescripcion] = useState('');

  function handleOnSubmit(e){
    e.preventDefault();
    addData();
  }

  function addData(){
    if(imagen !== '' &&
       nombre !== '' &&
       genero !== '' &&
       talla  !== '' &&
       coleccion !== '' &&      
       precio !== 0 ){
         const product = {
           cantidad: cantidad,
           categoria: genero,
           descripcion: descripcion,
           id: uuidv4(),
           img: imagen,
           nombre: nombre,
           precio: precio,
           talla: talla
         }
         insertNewProduct(product,coleccion);
        
         //Ahora se resetean los valores de las variables
         setImagen('');
         setNombre('');
         setGenero('');
         setTalla('');
         setCantidad(0);
         setPrecio(0);
         setColeccion('');
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
    if(e.target.name === 'nombre'){
      setNombre(value);
    }
    if(e.target.name === 'genero'){
      setGenero(value);
    }
    if(e.target.name === 'talla'){
      setTalla(value);
    }
    if(e.target.name === 'cantidad'){
      setCantidad(value);
    }
    if(e.target.name === 'precio'){
      setPrecio(value);
    }
    if(e.target.name === 'coleccion'){
      setColeccion(value);
      console.log(coleccion)
    }
    if(e.target.name === 'descripcion'){
      setDescripcion(value);
    }
  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nuevo Producto</h1>
      <form className="addProductForm" action="" onSubmit={handleOnSubmit}>
        
        <div className="addProductItem">
          <label>Imagen</label>
          <input name="img" type="text" placeholder="URL" onChange={handleOnChange} required/>
        </div>
        
        <div className="addProductItem">
          <label>Nombre</label>
          <input name="nombre" type="text" placeholder="Camiseta Nike Roja" onChange={handleOnChange} required/>
        </div>
        
        <div className="addProductItem">
          <label>Género</label>
          <select name="genero" onChange={handleOnChange}>
            <option value="" selected></option>
            <option value="H" >Hombre</option>
            <option value="M">Mujer</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Talla</label>
          <select name="talla" onChange={handleOnChange}>
            <option value="" selected></option>
            <option value="XSS">XSS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Cantidad</label>
          <input name="cantidad" type="number" placeholder="10" onChange={handleOnChange} required/>
        </div>
        
        <div className="addProductItem">
          <label>Precio</label>
          <input name="precio" type="number" onChange={handleOnChange} required/>
        </div>

        <div className="addProductItem">
          <label>Categoría</label>
          <select name="coleccion" onChange={handleOnChange}>
            <option value="" selected></option>
            <option value="Camisas">Camisa</option>
            <option value="Camiseta para niño">Camiseta para niño</option>
            <option value="pantalones">Pantalon</option>
            <option value="Pantalonetas">Pantaloneta</option>
            <option value="blusas">Blusas</option>
            <option value="jogger">Jogger</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Descripción</label>
          <textarea name="descripcion" onChange={handleOnChange}></textarea>
        </div>

        <input type="submit" value="Crear"/>
      </form>
    </div>
  );
}
