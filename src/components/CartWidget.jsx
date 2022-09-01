import Cart from "../assets/images/Cart.svg";
import { NavLink } from 'react-router-dom';

export const CartWidget = () => {
    return (
        <NavLink to='/cart'><img src={Cart} alt="Carrito de compras" className="Cart pulsate-fwd" /></NavLink>
    );
}