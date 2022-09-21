import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { ItemCart } from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    let todayDate = new Date().toISOString().slice(0, 10);

    const order = {
        buyer: {
            name: '',
            phone: '',
            email: '',
        },
        items: cart.map(prod => ({ id: prod.id, title: prod.title, price: prod.price })),
        date: todayDate,
        total: totalPrice()
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }


    if (!cart.length) {
        return (
            <>
                <div className='EmptyCart_Container'>
                    <p>Your cart is empty...</p>
                    <Link to='/'><button className='btn-goToShop'>Go shopping</button></Link>
                </div>
            </>
        )
    }

    return (
        <>
            {
                cart.map(prod => <ItemCart key={prod.id} prod={prod} />)
            }

            <p className='Total_inCart'>Total: ${totalPrice()}</p>

            <button onClick={handleClick}>Checkout</button>

        </>
    )
}