import React from 'react'
import "./CheckoutProduct.css"
import { BsCurrencyRupee } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { useStateValue } from '../StateProvider';

function CheckoutProduct({id,title,price,rating,image}) {
    console.log(id);
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROME_BASKET",
            id:id,
        });

    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt="" />
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small><BsCurrencyRupee/></small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {
                   Array(rating)
                   .fill()
                   .map((_) =>(
                   <p><FcLike/></p>
                   ))
                }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>

        </div>

        
    </div>
  )
}

export default CheckoutProduct