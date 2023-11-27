import React from "react"
//import Button from 'react-bootstrap/Button';
import {createOrder} from '../../services/firestore'
import {useNavigate} from "react-router-dom"
import CheckoutForm2 from "./CheckoutForm2";

function CheckoutCart({cart, total}) {
    function handleCheckout(userData){
        const orderData = {
            buyer: userData,
            item: cart,
            timestamp: new Date(),
        }
        createOrder(orderData)
    }
    return(
        <div>
            <CheckoutForm2 onSubmit={handleCheckout}/>            
        </div>
    )
}

export default CheckoutCart