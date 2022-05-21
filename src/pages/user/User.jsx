import "./user.css";
import {useParams } from "react-router-dom";

import { getSpecificDoc } from "../../FireStore/data";
import { getDocsWithQuery } from "../../FireStore/data";
import { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function User() {
  const params = useParams();
  const [userData, setUserData] = useState({})
  const [comprasUsuario, setComprasUsuario] = useState({})
  
  async function fetchUserData(){
    setUserData(await getSpecificDoc('Usuarios',params.userId))
    setComprasUsuario(await getDocsWithQuery('Facturas','usuario','==',params.userId))
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <Container className="User-Container" fluid={true}>
      {/*Información del usuario*/}
      <Row>
        <Col><img src={userData.img} alt="Imagen del usuario"/></Col>
        <Col>
          <span className="User-RowDataTitles">
            Nombre
          </span>
          <p>{userData.nombre}</p>
        </Col>
        <Col>
          <span className="User-RowDataTitles">
            Correo electrónico
          </span>
          <p>{userData.correo}</p>
        </Col>
      </Row>      
      <Row>
        <Col>
          <span className="User-RowDataTitles">
            Código postal
          </span>
          <p>{userData.codigo_postal}</p>
        </Col>
        <Col>
          <span className="User-RowDataTitles">
            Dirección
          </span>
          <p>{userData.direccion}</p>
        </Col>
        <Col>
          <span className="User-RowDataTitles">
            Número de teléfono
          </span>
          <p>{userData.telefono}</p>
        </Col>
      </Row>
      
      {/*Compras*/}
      <Row>
        <Col  md={12} className='User-ComprasContainer'>
          <span className="User-RowDataTitles">
            Compras efectuadas
          </span>          
        </Col>
      </Row>

      {/*Display Facturas*/}
      <Row>
        <Col>
          <span className="User-RowDataTitles">
            Fecha facturación
          </span>          
        </Col>
        <Col>
          <span className="User-RowDataTitles">
            Cantidad productos
          </span>
        </Col>
        <Col>
          <span className="User-RowDataTitles">
            Monto pagado
          </span>   
        </Col>
      </Row>
      {comprasUsuario != undefined?//Nos sercioramos de que se haya cargado bien el componente
        comprasUsuario.map((compra) => {
          return(
            <Row>
                <Col>
                  <p>{compra.fecha}</p>
                </Col>
                <Col>
                  <p>{compra.productos.length}</p>
                </Col>
                <Col>
                  <p>{compra.total}</p>
                </Col>
            </Row>
          )
        })
      :<></>
      }      
    </Container>
  );
}
