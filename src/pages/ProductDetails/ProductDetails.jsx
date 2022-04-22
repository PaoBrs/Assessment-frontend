import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import './productDetail.css'

function ProductDetails() {
  const product = useSelector(state => state.product)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div>
      {loading ? <Loading /> :
        <div>
          <h1 className='product__title'>Product Details</h1>
          <div className='product__container'>
            <div className='product__image'>
              <img src={product.image} alt={product.title} />
            </div>
            <div className='product__info'>
              <div className='product__head--small'>
                <p>{product.category}</p>
                <p>Rating</p>
                <i className="fa-solid fa-star"></i>
                <p>{product.rating.rate}</p>
              </div>
              <h2 className='product__info--title'>{product.title}</h2>
              <p className='product__info--price'> $ {product.price}</p>
              <p className='product__info--description'>{product.description}</p>
              <button>Add to cart</button>
            </div>
          </div>
        </div >}
    </div>
  )
}

export default ProductDetails
