import React from 'react'
import {Item} from './Item'

export const ItemList = ({ products }) => {

    return (
        <div className="ProdList_container">
            {products?.map(prd =>
                <Item key={prd.id} products={prd} />
            )}
        </div>
    )
}

export default ItemList