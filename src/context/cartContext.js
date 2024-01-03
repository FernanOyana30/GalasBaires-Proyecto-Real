import {createContext, useState} from "react";

const cartContext = createContext({ 
    cart: [],
});

function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    function addItem(producto, count){
        const newCart = JSON.parse(JSON.stringify(cart));

        if(isInCart(producto.id)){
            let index = cart.findIndex(itemInCart => itemInCart.id === producto.id)
            newCart[index].count = newCart[index].count + count

        }
        else {
            newCart.push({...producto, count});
        }
        
        setCart(newCart);   
    }    

    /**FUNCIONES DEL CARRITO*/
    //Remover producto del carrito (FUNCIONA)
    function removeItemFromCart(id){
        setCart(cart.filter((prod) => prod.id !== id) );
    }

    //Vaciar carrito (FUNCIONA)
    function clearCart(id){
        setCart([]);        
    }    
    
    //Obtener total de productos en el carrito
    const getCountInCart = cart.reduce ((acc, item) => {
        return acc = acc + item.count
    }, 0)
    //console.log(getCountInCart)
  
    //Obtener precio total de compra
    const getPriceInCart = cart.reduce ((acc, prod) => {
        return acc = acc + prod.count * prod.precio
    }, 0)
    //console.log(getPriceInCart)    

    //--------------------------------------------------

    //Verificar si un producto ya existe en el carrito
    function isInCart(id){
        return cart.some(item => item.id === id)
    }

    return (
        <cartContext.Provider value={{ cart, addItem, isInCart, clearCart, removeItemFromCart, getCountInCart, getPriceInCart }}>
            {children}
        </cartContext.Provider>
        );
}  

export {CartContextProvider}
export default cartContext;