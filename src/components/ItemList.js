import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
    return (
        <div className="ProdList_container">
        {products?.map(prd =>
            <Item key={prd.id} id={prd.id} title={prd.title} price={prd.price} images={prd.images[1]} />        
        )}
        </div>
    )
}

export default ItemList