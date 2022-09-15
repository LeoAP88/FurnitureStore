import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {

    const [products, setProducts] = useState({});
    const { detailId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detailId);
        getDoc(queryDoc)
            .then(res => setProducts({ id: res.id, ...res.data() }));
    }, [detailId])

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
