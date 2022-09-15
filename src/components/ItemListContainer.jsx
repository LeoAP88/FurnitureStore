import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');


        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        }
        else {
            getDocs(queryCollection)
                .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        }

    }, [categoryId]);

    return (
        <main>
            <section>
                <ItemList products={products} />
            </section>
        </main>

    )
}