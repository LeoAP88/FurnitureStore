import React from 'react'

const Item = ({products}) => {

    const {id,title,price,images} = products;

    return (
        <div className='Prod_Container'>
            <p>{id} - {title}</p>
            <p>{price}</p>
            <img src={images} alt={title} className="Img_product"></img>
        </div>
    )
}

export default Item