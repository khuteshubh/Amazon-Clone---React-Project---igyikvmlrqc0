import React from "react";
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import "./CheckOut.css";
import { useStateValue } from "../StateProvider";

function CheckOut(){
    const [{basket}] = useStateValue();
    return (
        <>
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkOut_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
            {basket?.length === 0 ? (
                <div className="checkout_title">
                    <h2 className="checkout_title">Your Shopping Basket is empty</h2>
                    <p className="checkout_title">you have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                </div>
            ) :(
                <div>
                    <h2 className="checkout_title">Hello,<br></br>Your Shopping Basket</h2>
                    {/* List out all of the checkout product */}
                    {basket.map((item) =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price= {item.price}
                        rating = {item.rating}
                        image= {item.image}

                        />
                    ))}
                </div>
            )}

            </div>
            
        
        {basket.length > 0 && (
            <div className="checkout_right">
                <Subtotal/>
                
            </div>
        )}
        </div>
        
        </>
        
    )
}

export default CheckOut;