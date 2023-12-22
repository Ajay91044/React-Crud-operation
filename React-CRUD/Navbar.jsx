import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <Link to='/addproducts'>Addproducts</Link>
    <Link to='/products'>Allproducts</Link> 
    <Link to='/product/:pid'>SingleProduct</Link> 
    <Link to='/updateproduct/:id'>UpdateProduct</Link> 
    
    </>
  )
}

export default Navbar