import React from 'react'
import { useCartContext } from '../context/CartContext';

export const ItemCart = ({ prod }) => {

    const { id, image, title, price, quantity } = prod;

    const { removeProduct } = useCartContext();

    return (
        <div className='ItemCart_Container'>
            <img src={image} alt={title} className='Img_inCart' />
            <p className='Title_inCart'>{title}</p>
            <p className='Price_inCart'>Unit price: ${price}</p>
            <p className='Quantity_inCart'>Quantity: {quantity}</p>
            <p className='Subtotal_inCart'>Subtotal: ${quantity * price}</p>
            <button onClick={() => removeProduct(id)} className='btn-remove'>X</button>
        </div>
    )
}