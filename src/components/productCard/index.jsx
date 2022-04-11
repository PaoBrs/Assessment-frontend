import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { PRODUCT_DETAILS } from '../../Constants/Routes'
import { fetchOneProduct, erasePreviousProduct } from '../../store/actions'

function ProductCard(props) {
  const { id, image, title } = props
  const dispatch = useDispatch()

  const handlerClick = () => {
    dispatch(erasePreviousProduct())
    dispatch(fetchOneProduct(id))
  }
  return (
    <div>
      <div> <img src={image} alt={title} /> </div>
      <h2>{title}</h2>
      <Link to={`${PRODUCT_DETAILS}/${id}`} onClick={handlerClick}>Go to Detail</Link>
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}


export default ProductCard
