import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({ products }) => {


    const { title, image } = products;

    return (
        
            <div className='Prod_Container'>
                <p className='Prod_Title'>{title}</p>
                <img src={process.env.PUBLIC_URL + image} alt={title} className="Img_product"></img>
                <Link to={`/detail/${products.id}`}>
                    <button className='btnInfo'>View</button>
                </Link>
            </div>
        
    )
}