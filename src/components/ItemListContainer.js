import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const FetchData = () => {
            const URL = 'https://api.escuelajs.co/api/v1/categories/3/products?offset=0&limit=15';
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    setProducts(data);
                })
        }

        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(FetchData);
            }, 2000);
        });
        getData.then(res => setProducts(res));

    }, [])


    function onAdd(counterReceived) {
        console.log(`Added quantity: ${counterReceived}`);
    }

    return (
        <main>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <section>
                <ItemList products={products} />
            </section>
        </main>

    )
}

export default ItemListContainer
