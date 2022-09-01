import React from 'react'
import ItemCount from './ItemCount';

export const Item = ({products}) => {

    const {title,price,image, stock} = products;

    function onAdd(counterReceived) {
        console.log(`Added quantity: ${counterReceived}`);
    }

    return (
        <div className='Prod_Container'>
            <p className='Prod_Title'>{title}</p>
            <p className='Prod_Price'>${price}</p>
            <img src={process.env.PUBLIC_URL+image} alt={title} className="Img_product"></img>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default Item