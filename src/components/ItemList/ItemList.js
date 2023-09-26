import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';

function ItemList({productos}) {
  
  return (
    <div className="pb-4 d-flex justify-content-start bd-highlight mb-3 flex-wrap">
      {productos.map((producto) => (
        <Card style={{ width: '15rem', borderColor:"white" }} key={producto.id} className="mb-3 pb-0 ms-3">
          <Card.Img variant="top" src={producto.imagen} />
          <Card.Body>
            <Card.Title >{producto.nombre}</Card.Title>
            <Card.Text>
            {producto.descripcionCard}
            </Card.Text>     
            <Link to={`/detalle/${producto.id}`}>
              <Button variant="light" className="button-style">Más información</Button>
            </Link> 
          </Card.Body>
        </Card>
      ))}
    </div>    
  );
}

export default ItemList;