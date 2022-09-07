import React from 'react'
import { ItemCount } from './ItemCount';

export const ItemDetail = ({ products }) => {

    const { title, price, description, image, stock } = products;

    function onAdd(counterReceived) {
        console.log(`Added quantity: ${counterReceived}`);
    }

    return (
        
        <div className="ProdList_container">
                        <p>{title}</p>
                        <p>{price}</p>
                        <p>{description}</p>
                        <img src={process.env.PUBLIC_URL + image} alt={title} className="Img_product"></img>
                        <ItemCount stock={stock} initial={1} onAdd={onAdd} />

            
        </div>

    )
}