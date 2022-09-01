import React, { useEffect, useState } from "react";
// import ItemCount from "./ItemCount";
import {ItemList} from "./ItemList";
import dataJson from "./data/data.json";

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

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

        getProducts(dataJson, 2000)
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => console.log(err, ": No products found"));
    }, []);


    // function onAdd(counterReceived) {
    //     console.log(`Added quantity: ${counterReceived}`);
    // }

    return (
        <main>
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
            <section>
                <ItemList products={products} />
            </section>
        </main>

    )
}

export default ItemListContainer
