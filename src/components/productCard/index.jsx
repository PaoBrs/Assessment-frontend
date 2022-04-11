import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { PRODUCT_DETAILS } from '../../Constants/Routes'

function ProductCard(props) {
  const { id, image, title } = props
  return (
    <div>
      <div> <img src={image} alt={title} /> </div>
      <h2>{title}</h2>
      <div><Link to={`${PRODUCT_DETAILS}/${id}`} /></div>
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}


export default ProductCard
