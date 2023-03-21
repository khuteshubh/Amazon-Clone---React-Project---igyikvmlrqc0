import React from 'react';
import { FcLike } from "react-icons/fc";
import { BsCurrencyRupee } from "react-icons/bs";
import "./Product.css"
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
            <p>{title}</p>
            <p className="product_price">
                <small><BsCurrencyRupee/></small>
                <strong>{price}</strong>
            </p>
            <p className="product_rating">
                {
                   Array(rating)
                   .fill()
                   .map((_) =>(
                   <p><FcLike/></p>
                   ))
                }
            </p>

        </div>
        
        <img  src={image} alt=""/>
        <button onClick={addToBasket}>Add to basket</button>
        
    </div>
  )
}

export default Product