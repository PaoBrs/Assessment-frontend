import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import { PRODUCT_DETAILS } from '../../Constants/Routes';
import { fetchOneProduct, erasePreviousProduct } from '../../store/actions';
import './productCard.css';

function ProductCard(props) {
  const { id, image, title } = props;
  const dispatch = useDispatch();
  const [randomCount, setRandomCount] = useState(0);
  const [info, setInfo] = useState(true);
  useEffect(() => {
    setRandomCount(Math.floor(Math.random() * 10) + 1);
  }, []);

  const handlerClick = () => {
    dispatch(erasePreviousProduct());
    dispatch(fetchOneProduct(id));
  };

  const hadlerOnComplete = () => {
    setInfo(false);
    setRandomCount(0);
  };

  return (
    <div className='productCard-container'>
      <img className='productCard__img--size' src={image} alt={title} />
      <h3>{title}</h3>
      <div className='productCard-counter'>
        This offer ends in: <Countdown date={Date.now() + 60000 * randomCount} onComplete={hadlerOnComplete} />
      </div>
      <Link className={info ? 'enable' : 'disable'} to={`${PRODUCT_DETAILS}/${id}`} onClick={handlerClick}>Go to Detail</Link>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
