import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { BsCurrencyRupee } from "react-icons/bs";
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import "./Subtotal.css"
var r = <BsCurrencyRupee/>;
function Subtotal() {
    const [{basket},dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        {/* price */}
        <CurrencyFormat
        renderText={(value) =>(
            <>
            <p>Subtotal ({basket.length} items) : <strong>{value}</strong></p>
            <small className='subtotal_gift'>
                <input type="checkbox"/>This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix = {"Rupee"}


        />

        
        <button>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal