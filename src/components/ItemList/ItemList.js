import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemList() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Nombre producto</Card.Title>
        <Card.Text>
          Descripción producto
        </Card.Text>
        <Link to="/ItemDetailContainer">
          <Button variant="primary">Más información</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ItemList;