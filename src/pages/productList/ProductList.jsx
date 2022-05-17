import "./productList.css";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../FireStore/data"

import Button from 'react-bootstrap/Button'

export default function ProductList() {  
  const [data, setData] = useState([]);

  async function uploadData(){
    const uploadProducts = await getProducts()  
    setData(uploadProducts) 
  }
  

  useEffect(() => {
    uploadData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: 'nombre', headerName: 'Nombre', width: 200      
    },
    { field: "cantidad", headerName: "Cant", width: 105 },
    {
      field: "img",
      headerName: "Img",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="Imagen del producto" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "precio",
      headerName: "Precio",
      width: 160,
    },
    {
      field: "talla",
      headerName: "Talla",
      width: 106,
    },
    {
      field: "categoria",
      headerName: "Categoría",
      width: 134,
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      width: 200,
    },
    {
      field: "accion",
      headerName: "Accion",
      width: 150,
      //${params.row.talla}/${params.row.img}/${params.row.categoria}/${params.row.cantidad}`}>
      renderCell: (params) => {
        return (
          <>          
            <Link to={`/product/${params.row.id}/${params.row.categoria}`}>
              <button className="productListEdit">Editar</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Link to="/newproduct">
        <Button variant="primary">Agregar producto</Button>        
      </Link>
      
      {
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
      }
    </div>
  );
}