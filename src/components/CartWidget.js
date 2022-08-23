import Cart from "../assets/images/Cart.svg";

export const CartWidget = () => {
    return (
        <a href="#"><img src={Cart} alt="Carrito de compras" className="Cart pulsate-fwd" /></a>
    );
}