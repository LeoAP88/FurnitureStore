import React from 'react'

export const Item = ({products}) => {

    const {title,price,image} = products;


    return (
        <div className='Prod_Container'>
            <p>{title}</p>
            <p>${price}</p>
            <img src={process.env.PUBLIC_URL+image} alt={title} className="Img_product"></img>
        </div>
    )
}

export default Item