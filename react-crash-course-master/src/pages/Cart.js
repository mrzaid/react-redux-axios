import React from 'react'

export default function Cart() {

  const cartItems=useSelector((state)=>state.cart.items)



  return (<>
  
  
    <div>Cart</div>
    </>
  )
}
