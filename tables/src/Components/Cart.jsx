import React from 'react'
import CartHeading from './CartHeading';
import CartItem from './CartItem';

const cartItems = [
    {
        price: 15.00,
        quantity: 2,
        title: "Black Printed Coffee Mug",
        imgURL: "https://trycasuals.com/wp-content/uploads/2018/06/mug-coffee-5.jpg",

    },
    {
        price: 34.00,
        quantity: 4,
        title: "Printed Dark Blue Shirt",
        imgURL: "https://trycasuals.com/wp-content/uploads/2018/06/tshirt4-4.jpg",

    },
]

const Cart = () => {
    console.log('cart run');
  return (
    <div className=' bg-white m-12 pt-16'>
        <div>
            <CartHeading />
        </div>
        <div>

        </div>
        {
            cartItems.map((item) => {
                return (
                    <CartItem imgURL={item.imgURL} title={item.title} price={item.price} quantity={item.quantity} />
                )
            })
        }
    </div>
  )
}

export default Cart;