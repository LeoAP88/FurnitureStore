import React from 'react'
import { Item } from './Item'
import { BeatLoader } from 'react-spinners'


export const ItemList = ({ products }) => {

    return (
        <div className="ProdList_container">
            {products.length ? products.map((prd) =>
                <Item key={prd.id} products={prd} />) : (<div className='Loader'><BeatLoader
                    color="#d0c9ab"
                    margin={10}
                    size={30}
                /></div>)}
        </div>
    )
}