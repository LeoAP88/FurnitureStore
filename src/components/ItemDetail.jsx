import React from 'react'
import { useState } from 'react';
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export const ItemDetail = ({ products }) => {

    const { title, price, description, image, stock } = products;

    const [goToCart, setGoToCart] = useState(false);

    const { addProduct } = useCartContext();

    function onAdd(quantity) {
        setGoToCart(true);
        addProduct(products, quantity);
    }

    return (
        <div className="Prod_Detail_Container">
            <p className='Prod_Title_detail'>{title}</p>
            <p className='Prod_Description'>{description}</p>
            <img src={process.env.PUBLIC_URL + image} alt={title} className="Img_product_detail"></img>
            <p className='Prod_Price'>Price: ${price}</p>
            {
                goToCart
                    ? <Link to='/cart' className='btn-ToCart'>Proceed to checkout</Link>
                    : <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            }
        </div>
    )
}