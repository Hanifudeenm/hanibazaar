import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Admin from './pages/Admin'
import Header from './components/Header'

export default function App(){
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </main>
    </div>
  )
}
