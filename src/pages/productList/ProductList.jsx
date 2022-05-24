import "./productList.css";

import { Button } from "react-bootstrap";
import TableDisplay from '../../components/TableDisplay/TableDisplay'
import { BsPencilFill, BsTrashFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { getElements, db } from '../../FireStore/dbInitialize'
import { deleteDoc, doc } from "firebase/firestore"

export default function ProductList() {  
  const [products, setProducts] = useState([]);                 
  
  async function fetchProductData(){
    const fetchedData = await getElements('Productos')
    setProducts(fetchedData)
  }

  const handleDelete = async(id) => {
    setProducts(products.filter((item) => item.id !== id));
    await deleteDoc(doc(db, 'Productos', id))
  };

  const columns = useMemo(
    () => [
        {
          Header: 'Id',
          accessor: 'id',
        },
        {
          Header: 'Nombre',
          accessor: 'nombre',
        },
        {
          Header: 'Img',
          accessor: 'img',
          Cell: ({ row }) => (
            <img className="TableRowImg" src={row.values.img} />
          )
        },
        {
          Header: 'Categoria',
          accessor: 'categoria',
        },
        {
          Header: 'Descripcion',
          accessor: 'descripcion',
        },
        {
          Header: 'Talla',
          accessor: 'talla',
        },
        {
          Header: 'Marca',
          accessor: 'marca',
        },
        {
          Header: 'Cantidad',
          accessor: 'cantidad',
        },
        {
          Header: 'Precio',
          accessor: 'precio',
        },
    ],
    []
  )

  const productsData = useMemo(() => [...products],[products])

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "acciones",
        Header: "Acciones",
        Cell: ({ row }) => (
          <>
            <Button variant="primary" onClick={() => {if (window.confirm('¿Seguro que desea eliminar este item?')) handleDelete(row.values.id)}}> <BsTrashFill/> </Button>       
            <Link to={`/product/${row.values.id}/${row.values.categoria}`}>
              <Button variant="primary"> <BsPencilFill/> </Button>
            </Link>
          </>
        ),
      },
    ]);
  };

  useEffect(() => {
    fetchProductData()
  }, [])

  if(productsData)
  return (
    <div className="productList">
      
      <Link to="/newproduct">
        <Button variant="primary">Nuevo producto</Button>
      </Link>

      <input type="text" placeholder='Nombre producto'/>
      <Button variant="primary">Buscar</Button>

      
      <TableDisplay 
          columns={columns}
          data={productsData}
          tHooks = {tableHooks}
      />
    </div>
        
  );

}