import React from 'react'
import { useSelector } from 'react-redux'

function ProductDetails() {
  const product = useSelector(state => state.product)
  console.log(product)
  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductDetails
