import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

export default function Checkout(){
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const nav = useNavigate()

  async function placeOrder(){
    const cart = JSON.parse(localStorage.getItem('cart')||'[]')
    if(cart.length===0) return alert('Cart empty')
    const order = {
      customerName: name,
      address,
      items: cart,
      total: cart.reduce((s,i)=> s + i.price*i.qty, 0),
      status: 'placed',
      createdAt: serverTimestamp()
    }
    const ref = await addDoc(collection(db, 'orders'), order)
    localStorage.removeItem('cart')
    alert('Order placed: ' + ref.id)
    nav('/')
  }

  return (
    <div>
      <h2>Checkout</h2>
      <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
      <textarea placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} />
      <button onClick={placeOrder}>Place order (mock payment)</button>
    </div>
  )
}
