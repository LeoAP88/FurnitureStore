import React, { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    return (

        <div className="ItemCounter_Container">
            <div className='Counter_Container'>
                <button className='btn-decrease' onClick={decrease} disabled={count <= 1}>-</button>
                <span className='item-quantity'>{count}</span>
                <button className='btn-increase' onClick={increase} disabled={count >= stock}>+</button>
            </div>
            <button className="btn-addToCart" disabled={stock <= 0} onClick={() => onAdd(count)}>Add to cart</button>
        </div>

    )
}