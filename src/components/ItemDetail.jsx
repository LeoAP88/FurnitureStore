import React from 'react'
import { ItemCount } from './ItemCount';

export const ItemDetail = ({ products }) => {

    const { title, price, description, image, stock } = products;

    function onAdd(counterReceived) {
        console.log(`Added quantity: ${counterReceived}`);
    }

    return (
        <div className="Prod_Detail_Container">
            <p className='Prod_Title_detail'>{title}</p>
            <p className='Prod_Description'>{description}</p>
            <img src={process.env.PUBLIC_URL + image} alt={title} className="Img_product_detail"></img>
            <p className='Prod_Price'>Price: ${price}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </div>
    )
}