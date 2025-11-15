import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Cart(){
  const [cart, setCart] = useState([])

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem('cart')||'[]'))
  },[])

  function updateQty(i, val){
    const c = [...cart]
    c[i].qty = Math.max(1, val)
    setCart(c)
    localStorage.setItem('cart', JSON.stringify(c))
  }

  function removeItem(i){
    const c = cart.filter((_,idx)=> idx!==i)
    setCart(c)
    localStorage.setItem('cart', JSON.stringify(c))
  }

  const total = cart.reduce((s,item)=> s + item.price*item.qty, 0)

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length===0 ? <p>Cart is empty. <Link to="/products">Shop now</Link></p> : (
        <div>
          {cart.map((item, i)=> (
            <div key={i} className="cart-item">
              <div>{item.title}</div>
              <div>
                <input type="number" value={item.qty} onChange={e=> updateQty(i, Number(e.target.value))} />
                <button onClick={()=> removeItem(i)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <Link to="/checkout" className="btn">Checkout</Link>
        </div>
      )}
    </div>
  )
}
