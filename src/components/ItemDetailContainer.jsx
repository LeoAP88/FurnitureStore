import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import dataJson from "./data/data.json";
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners'

export const ItemDetailContainer = () => {

    const [products, setProducts] = useState({});
    const { detailId } = useParams();

    useEffect(() => {

        const getProducts = (data, time) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (data) {
                        resolve(data);
                    } else {
                        reject("Error");
                    }
                }, time);
            });

        getProducts(dataJson, 1000)

            .then(res => setProducts(res.find(prod => prod.id === detailId)))
            .catch((err) => console.log(err, ": No products found"))

    },);

    return (
        <>
            {
                Object.entries(products).length === 0 ?
                    <div className='Loader'><BeatLoader
                        color="#d0c9ab"
                        margin={10}
                        size={30}
                    /></div>
                    :
                    <ItemDetail products={products} />
            }
        </>
    )
}
