import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import dataJson from "./data/data.json";
import { useParams } from 'react-router-dom';
// import { getFirestore, doc, getDoc} from 'firebase/firestone';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

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

            .then(categoryId ? (res => setProducts(res.filter(prod => prod.category === categoryId))) : ((res) => setProducts(res)))
            .catch((err) => console.log(err, ": No products found"))

    }, [categoryId]);

    // useEffect(() => {
    //     const querydb = getFirestore();
    //     const queryDoc = doc(querydb, 'products', '1000');
    //     getDoc(queryDoc)
    //     .then(res => console.log(res));
    // }, [])

    return (
        <main>
            <section>
                <ItemList products={products} />
            </section>
        </main>

    )
}