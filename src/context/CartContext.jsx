import React, {useState} from "react";
import { useContext } from "react";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const cleanCart = () => setCart([]);

    const isInCart = (id) => cart.find(prod => prod.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(prod => prod.id !== id));

    const addProduct = (item, quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(prod => {
                return prod.id === item.id ? {...prod, quantity: prod.quantity + quantity} : prod
            }));
        } else{
            setCart([...cart, {...item, quantity}]);
        }
    }

    return(
        <CartContext.Provider value={{
            cleanCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}