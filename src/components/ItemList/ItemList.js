import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemList({productos}) {
  return (
    <div class="d-flex  bd-highlight mb-3 flex-wrap">
      {productos.map((producto) => (
        <Card style={{ width: '18rem' }} key={producto.id}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>
              {producto.descripcion}
            </Card.Text>`
            <Link to={`/detalle/${producto.id}`}>
              <Button variant="primary">Más información</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>    
  );
}

export default ItemList;