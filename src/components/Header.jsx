import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="header">
      <div className="brand">
        <Link to="/">HaniBazaar</Link>
      </div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  )
}
