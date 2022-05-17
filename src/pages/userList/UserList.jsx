import "./userList.css";

import { Button } from "react-bootstrap";

import { useEffect, useState } from "react";
import TableDisplay from '../../components/TableDisplay/TableDisplay'

import { getElements } from '../../FireStore/dbInitialize'

export default function UserList() {
  const [data, setData] = useState([{}])
  const columns = [{field:"nombre",headerName:"Nombre"},
                   {field:"img",headerName:"Img",
                      accion:(params)=>{
                        return(
                          <img className="TableImg" src={params.img} alt="Imágen del usuario" />
                        )
                      }},
                   {field:"correo",headerName:"Correo"},
                   {field:"direccion",headerName:"Direccion"},
                   {field:"codigo postal",headerName:"Codigo postal"},
                   {field:"status",headerName:"Status"},
                   {field:"accion",headerName:"Acción", 
                      accion:(params)=>{
                        return(
                          <>
                            <Button variant="primary">Deshabilitar</Button>
                            <Button variant="primary">Ver</Button>
                          </>
                        )
                      }}]

  async function fetchUsersData(){
    const fetchedData = await getElements('Usuarios')
    setData(fetchedData)
  }

  useEffect(() => {
    fetchUsersData()
  }, [])
  

 /* 
 const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Usuario",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "accion",
      headerName: "Accion",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Ver</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
*/

  return (
    <div className="userList">
      <TableDisplay 
        columns={columns}
        data={data}
      />

    </div>
  );
}
