import React, {useState} from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function Admin(){
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [desc, setDesc] = useState('')

  async function addProduct(){
    if(!title||!price) return alert('Title and price required')
    await addDoc(collection(db, 'products'), {
      title, price: Number(price), image, description: desc
    })
    alert('Product added')
    setTitle(''); setPrice(''); setImage(''); setDesc('')
  }

  return (
    <div>
      <h2>Admin - Add Product</h2>
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} />
      <input placeholder="Image URL" value={image} onChange={e=>setImage(e.target.value)} />
      <textarea placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} />
      <button onClick={addProduct}>Add</button>
    </div>
  )
}
