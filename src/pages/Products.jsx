import React, {useEffect, useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import ProductCard from '../components/ProductCard'

export default function Products(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function load(){
      setLoading(true)
      const snap = await getDocs(collection(db, 'products'))
      const items = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setProducts(items)
      setLoading(false)
    }
    load()
  },[])

  if(loading) return <p>Loading...</p>

  return (
    <div className="grid">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
