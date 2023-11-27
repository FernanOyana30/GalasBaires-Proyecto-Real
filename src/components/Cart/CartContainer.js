import React from 'react'
import {useContext} from "react";
import cartContext from "../../context/cartContext";
import Form from 'react-bootstrap/Form';
import CheckoutCart from './checkoutCart'

function CartContainer(){
    const {cart, clearCart} = useContext(cartContext)

           return(
            <>
                <CheckoutCart cart={cart}/>
                <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlTextarea1">  
                  <Form.Label>Consulta*</Form.Label>                                             
                  {cart.map((item) => {
                    return (
                      <div key={item.id} style={{backgroundColor: "lightGray", padding: "15px"}}>
                        <p style={{marginRight:'60px'}}>¡Hola! Me gustaría recibir más información sobre el producto {item.nombre}, por favor. ¡Muchas gracias!</p>
                      </div>
                        );
                      })}
                </Form.Group>
            </>
        )
}

export default CartContainer