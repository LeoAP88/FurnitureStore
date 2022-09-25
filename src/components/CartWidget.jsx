import Cart from "../assets/images/Cart.svg";
import { NavLink } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";

export const CartWidget = () => {

    const { cart, totalProducts } = useCartContext();


    if (!cart.length) {
        return (
            <>
            </>
        )
    }

    return (
        <>
            <NavLink to='/cart'>
                <img src={Cart} alt="Carrito de compras" className="Cart" />
                <span className="itemsInCart">{totalProducts() || ''}</span>
            </NavLink>

        </>
    );
}