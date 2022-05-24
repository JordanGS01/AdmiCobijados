import "./userList.css";

import { Button } from "react-bootstrap";
import TableDisplay from '../../components/TableDisplay/TableDisplay'

import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { getElements, updateStatus } from '../../FireStore/dbInitialize'

import NA from '../../images/NA.png'

export default function UserList() {
  const [data, setData] = useState([{}])
  const desabilitar = async (params) =>{
    params.status = !params.status
    await updateStatus(params)
    window.location.reload(false);
}
  async function fetchUsersData(){
    const fetchedData = await getElements('Usuarios')
    setData(fetchedData)
  }

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
          Header: 'Correo',
          accessor: 'correo',
        },
        {
          Header: 'Dirección',
          accessor: 'direccion',
        },
        {
          Header: 'Codigo Postal',
          accessor: 'codigo_postal',
        },
        {
          Header: 'Status',
          accessor: 'status',
          Cell: ({ row }) => (
            row.values.status?"Habilitado":"Deshabilitado"
          )
        },
    ],
    []
  )

  const usersData = useMemo(() => [...data],[data])

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "acciones",
        Header: "Acciones",
        Cell: ({ row }) => (
          <div className="UserListActionsColumn">
            <Button className="UserListActionsColumn-Button" variant="primary" onClick={(event) => {
                    if (window.confirm(`¿Seguro que desea ${row.values.status === true? "desabilitar": "habilitar"} a: `+ row.values.nombre)) desabilitar(row.values)}}>{row.values.status === true? "Desabilitar": "Habilitar"}</Button>
            <Link to={`/user/${row.values.id}`}>
              <Button className="UserListActionsColumn-Button" variant="primary">Ver</Button>
            </Link>
          </div>
        ),
      },
    ]);
  };

  useEffect(() => {
    fetchUsersData()
  }, [])
  
  if(usersData)
  return (
    <div className="productList">
      
      <Link to="/newproduct">
        <Button variant="primary">Nuevo producto</Button>
      </Link>

      <input type="text" placeholder='Nombre producto'/>
      <Button variant="primary">Buscar</Button>

      
      <TableDisplay 
          columns={columns}
          data={usersData}
          tHooks = {tableHooks}
      />
    </div>
        
  );
}
