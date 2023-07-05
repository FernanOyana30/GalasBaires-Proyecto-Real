import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ItemDetailContainer({ greeting }) {
    return (
      <>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <h1>Título del producto</h1>
            <p>$0</p>
            <Card.Text>
              Descripción
            </Card.Text>
            <Button variant="primary">Más información</Button>
          </Card.Body>
        </Card>     
        <div>
          <h2>Productos destacados</h2>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Nombre producto</Card.Title>
              <Card.Text>
                Precio producto
              </Card.Text>
              <Button variant="primary">Más información</Button>
            </Card.Body>
          </Card>
        </div>   
      </>
    );
  }

export default ItemDetailContainer