import React from 'react'
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';

export const Item = ({ products }) => {

    // const {title,price,image, stock} = products;

    // function onAdd(counterReceived) {
    //     console.log(`Added quantity: ${counterReceived}`);
    // }

    // // return (
    // //     <div className='Prod_Container'>
    // //         <p className='Prod_Title'>{title}</p>
    // //         <p className='Prod_Price'>${price}</p>
    // //         <img src={process.env.PUBLIC_URL+image} alt={title} className="Img_product"></img>
    // //         <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
    // //     </div>
    // // )

    const { title, image } = products;

    return (
        
            <div className='Prod_Container'>
                <p className='Prod_Title'>{title}</p>
                <img src={process.env.PUBLIC_URL + image} alt={title} className="Img_product"></img>
                <Link to={`/detail/${products.id}`}>
                    <button>More Info</button>
                </Link>
            </div>
        
    )
}