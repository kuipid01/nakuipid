/* eslint-disable react/prop-types */
import  { useState } from 'react';
import './feat.scss';
import Card from '../card/Card';
import { sampleEcommerceProducts } from '../../constants';

const Feature = () => {
  const productsOnScreen = 6;
  
  const moverItems = Math.ceil(sampleEcommerceProducts.length / productsOnScreen);
  const moverArray = Array.from({ length: moverItems });

  const [activeIndex, setActiveIndex] = useState(0);

  const handleMoverClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='featureContainer'>
      <h1 className='title'>Featured Items</h1>

      <div className='productContainer'>
        <div
          className='container'
          style={{
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${activeIndex * 100}%)`,
            display: 'flex',
          }}
        >
          {/* Display only the products on the current page */}
          {sampleEcommerceProducts.map((product) => (
            <div key={product.id} className='productCard'>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className='mover'>
        {moverArray.map((_, index) => (
          <span
            key={index}
            onClick={() => handleMoverClick(index)}
            className={index === activeIndex ? 'active' : ''}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Feature;
