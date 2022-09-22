import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../context/CartContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const UserForm = () => {

    const { cart, totalPrice } = useCartContext();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const todayDate = new Date().toISOString().slice(0, 10);
    const MySwal = withReactContent(Swal)

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: {
                name: name,
                phone: phone,
                email: email,
            },
            items: cart.map(prod => ({ id: prod.id, title: prod.title, price: prod.price })),
            date: todayDate,
            total: totalPrice()
        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => MySwal.fire({
                title: 'Congratulations!',
                text: 'Take note of your order\n' + id,
                icon: 'success'
            })
                .then(function () { window.location.href = '/' })
            )
    }

    return (
        <div className='Form_Container'>
            <form action="" onSubmit={handleSubmit}>
                <legend>Personal information</legend>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    required
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <label htmlFor="phone">Phone number</label>
                <input
                    id="phone"
                    type="number"
                    required
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    required
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <button type="submit">Checkout</button>
            </form>
        </div>
    )
}

