import React from "react";
//import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemList() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemList;
/*
export default function ItemList({ productos }) {
    return (
      <>
        <div>
          <ul>   
              <li>                
                <h5>Nombre</h5>
                <small>Descripción</small>                                         
                <small>Precio</small>  
              </li>            
          </ul>
        </div>
      </>
      
    );
  }
  */