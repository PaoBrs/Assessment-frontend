import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'

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
      {loading ? <Loading /> : < div >
        <h1>Product Details</h1>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div >}
    </div>
  )
}

export default ProductDetails
