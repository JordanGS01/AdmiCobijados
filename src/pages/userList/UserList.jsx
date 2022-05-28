import "./userList.css";
import Topbar from "../../components/Admin/topbar/Topbar";
import { Button } from "react-bootstrap";
import TableDisplay from '../../components/Admin/TableDisplay/TableDisplay'

import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { getElements, updateStatus } from '../../data/adminMetodos'

export default function UserList() {
  const [data, setData] = useState([{}])

  async function fetchUsersData(){
    const fetchedData = await getElements('Usuarios')
    setData(fetchedData)
  }

  useEffect(() => {
    fetchUsersData()
  }, [])


  const desabilitar = async (params) =>{
    params.status = !params.status
    await updateStatus(params)
    window.location.reload(false);
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
                    if (window.confirm(`¿Seguro que desea ${row.values.status === true? "desabilitar": "habilitar"} a: `+ row.values.nombre)) desabilitar(row.values)}}> <i className={row.values.status === true? "bi bi-eye-fill": "bi bi-eye-slash-fill"}></i> </Button>
            
            <Link to={`/user/${row.values.id}`}>
              <Button className="UserListActionsColumn-Button" variant="primary"><i className="bi bi-person-rolodex"></i></Button>            
            </Link>
          </div>
        ),
      },
    ]);
}; 

  if(usersData)
  return (
    <>
    <Topbar/>
    <div className="productList">
     
      <TableDisplay 
          columns={columns}
          data={usersData}
          tHooks = {tableHooks}
      />
    </div>
    </>
  );
}
