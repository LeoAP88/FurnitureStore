import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import dataJson from "./data/data.json";
import { useParams } from 'react-router-dom';

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

    return (
        <main>
            <section>
                <ItemList products={products} />
            </section>
        </main>

    )
}