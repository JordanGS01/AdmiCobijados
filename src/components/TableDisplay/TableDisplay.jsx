import './TableDisplay.css'
import Table from 'react-bootstrap/Table'

/*Recibe como parámetros 'data' que es un arrego con los objetos con la información para llenar la tabla, y
'columns' que es un ARREGLO de objetos que debe tener tres principales atributos:
1.headerName: El nombre de la columna a mostrar
2.field: El nombre del atributo que se accesara de los objetos de 'data' para rellenar las filas
3.accion: Una función que debe retornar elementos HTML.
('accion' es opcional)
*/
export default function TableDisplay(props){
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    {props.columns.map((column)=>{
                        return(
                            <th>{column.headerName}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {props.data.map(object => {
                    return(
                        <tr>
                            {props.columns.map((column)=>{
                                return(
                                    <th>
                                        {column.hasOwnProperty('accion')?
                                        column.accion(object):
                                        String(object[column.field])}
                                    </th>
                                )
                            })}
                        </tr>
                    ) 
                })}
            </tbody>
        </Table>
    )
}