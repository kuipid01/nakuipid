/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './card.scss'
import {AiOutlinePhone,AiOutlineSearch,AiFillContainer,AiOutlineDown } from 'react-icons/ai'
import {FaShoppingBag } from 'react-icons/fa'
const Card = ({product}) => {
  const {name,description,price,category,imageUrl,stock} = product
  return (
    <div className='cardContainer'>
 <img src={imageUrl} alt="" />
 {/* <div className='stars'></div> */}
 <p className="Cardtitle">{name}</p>
 <h1>{price}</h1>
 <button> <AiFillContainer/> Add to cart</button>
    </div>
  )
}

export default Card