import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { ItemCart } from './ItemCart';
import { UserForm } from './UserForm';

export const Cart = () => {

    const { cart, totalPrice } = useCartContext();

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

            <UserForm />

        </>
    )
}