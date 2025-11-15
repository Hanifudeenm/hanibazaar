import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function ProductDetail(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const nav = useNavigate()

  useEffect(()=>{
    async function load(){
      const d = await getDoc(doc(db, 'products', id))
      if(d.exists()) setProduct({id: d.id, ...d.data()})
      else nav('/products')
    }
    load()
  },[id])

  if(!product) return <p>Loading...</p>

  return (
    <div>
      <img src={product.image||'/placeholder.png'} alt={product.title} style={{maxWidth:300}} />
      <h2>{product.title}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={()=>{
        const cart = JSON.parse(localStorage.getItem('cart')||'[]')
        cart.push({id:product.id, title:product.title, price:product.price, qty:1})
        localStorage.setItem('cart', JSON.stringify(cart))
        alert('Added to cart')
      }}>Add to cart</button>
    </div>
  )
}
