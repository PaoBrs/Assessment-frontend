import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../components/productCard';
import { fetchProduct } from '../../store/actions';
import Loading from '../../components/Loading';
import './home.css';

function Home() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    dispatch(fetchProduct());
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <div className='home__title'>Home</div>
      <div className='home__container--display'>
        {loading ? <Loading /> : products.map((product) => <ProductCard key={product.id} id={product.id} image={product.image} title={product.title} />)}
      </div>
    </>
  );
}

export default Home;
