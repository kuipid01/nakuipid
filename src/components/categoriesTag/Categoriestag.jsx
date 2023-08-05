/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from 'react';
import './categories.scss';
import Card from '../card/Card';
import { sampleEcommerceProducts } from '../../constants';
import { AiOutlineArrowRight } from "react-icons/ai";
const Categoriestag = ({title}) => {


  return (
    <div className='categoriesContainer'>
      <h1 className='title'>{title}</h1>
        <div  className='container' >
          {/* Display only the products on the current page */}
          {sampleEcommerceProducts.slice(0,6).map((product) => (
            <div key={product.id} className='productCard'>
              <Card product={product} />
            </div>
          ))}
        </div>
<div className='linkcontainer'> 
<h1> See more</h1>  <AiOutlineArrowRight/> </div>

      </div>
  );
};

export default Categoriestag;
