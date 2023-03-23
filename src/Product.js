import React from 'react';
import { FcLike } from "react-icons/fc";
import { BsCurrencyRupee } from "react-icons/bs";
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,price,rating,image}) {
  
  const [{},dispatch] = useStateValue();
  const addToBasket = () =>{
    // Add to the basket
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        price:price,
        rating:rating,
        image:image,
      },
    });

  };
  return (
    <div className="product">
        <div className='product_info'>
            <span className='productinfo_title'>{title}</span><br/>
            <span className="product_price">
                <small><BsCurrencyRupee/></small>
                <strong>{price}</strong>
            </span>
            <span className="product_rating">
                {
                   Array(rating)
                   .fill()
                   .map((_) =>(
                   <span><FcLike/></span>
                   ))
                }
            </span>

        </div>
        
        <img  src={image} alt=""/>
        <button onClick={addToBasket}>Add to basket</button>
        
    </div>
  )
}

export default Product