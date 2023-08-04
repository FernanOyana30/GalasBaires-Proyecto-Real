import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './fragancias';

function Test(){
    return (
        <>
            <Container>
                <Row>
                    <Col sm={1} lg={6}>
                        <div>
                            <h5>1. ¿En qué momento encenderías una vela aromática?</h5>
                            <Form.Select aria-label="Default select example">
                              <option>Elige una opción</option>
                              <option value="a" required>A la mañana</option>
                              <option value="b" required>A la tarde</option>
                              <option value="c" required>A la noche</option>
                              <option value="d" required>En la cena</option>
                              <option value="e" required>Para descansar/relajarme</option>
                            </Form.Select>
                            <h5>2. ¿En qué habitaciones usarías velas y/o difusores aromáticos?</h5>
                            <Form.Select aria-label="Default select example">
                              <option>Elige una opción</option>
                              <option value="a" required>Living</option>
                              <option value="b" required>Cocina</option>
                              <option value="c" required>Baño</option>
                              <option value="d" required>Dormitorio</option>
                              <option value="e" required>Trabajo/Otros espacios</option>
                            </Form.Select>
                            <h5>3. ¿Qué nivel de aroma te gustaría?</h5>
                            <Form.Select aria-label="Default select example">
                              <option>Elige una opción</option>
                              <option value="a" required>Sutil</option>
                              <option value="b" required>Normal</option>
                              <option value="c" required>Alto</option>
                              <option value="d" required>Intenso</option>
                            </Form.Select>
                            <h5>4. ¿Qué aromas te gustan?</h5>
                            <Form.Select aria-label="Default select example">
                              <option>Elige una opción</option>
                              <option value="a" required>Floral</option>
                              <option value="b" required>Dulce</option>
                              <option value="c" required>Cítrico</option>
                              <option value="d" required>Relajante</option>
                              <option value="e" required>Amaderado</option>
                            </Form.Select>
                            <Button className='button-style' type="submit">Enviar formulario</Button>
                        </div>
                    </Col>
                </Row>
            </Container>        
        </>
    )
}

export default Test