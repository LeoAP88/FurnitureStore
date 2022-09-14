import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
// import dataJson from "./data/data.json";
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners'
import { getFirestore, doc, getDoc} from 'firebase/firestore';

export const ItemDetailContainer = () => {

    const [products, setProducts] = useState({});
    const { detailId } = useParams();

    // useEffect(() => {

    //     const getProducts = (data, time) =>
    //         new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 if (data) {
    //                     resolve(data);
    //                 } else {
    //                     reject("Error");
    //                 }
    //             }, time);
    //         });

    //     getProducts(dataJson, 1000)

    //         .then(res => setProducts(res.find(prod => prod.id === detailId)))
    //         .catch((err) => console.log(err, ": No products found"))

    // },);

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', '1001');
        getDoc(queryDoc)
        .then(res => setProducts({id: res.id, ...res.data()}));
    }, [])

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
