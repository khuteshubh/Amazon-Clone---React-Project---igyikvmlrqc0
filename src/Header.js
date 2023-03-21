import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import "./Header.css";
import  ShoppingBasketIcon  from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";



function Header(){
    const [{basket}] = useStateValue();
    console.log(basket);
    return(
        <nav className='header'>
            <Link to="/">
            <img className="Header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="header-logo"/>
            </Link>
            
            {/* {search box} */}
            <div className="header_Search">
                <input type="text" className="header_searchinput"/>
                <SearchIcon className="header_searchIcon"/>

            </div>
            
            {/* {3 links} */}
            <div className="header_nav">
                {/* { 1st link} */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Guest</span>
                        <span className="header_optionLineTwo">Sign In</span >

                    </div>
                
                </Link>
                {/* {2nd link} */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span >
                        <span className="header_optionLineTwo">& Orders</span>

                    </div>
                
                </Link>
                {/* {3rd link} */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">your</span>
                        <span className="header_optionLineTwo">Prime</span>

                    </div>

                </Link>

                {/* {4th link} */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                       {/* {Shooping basket icon} */}
                       <ShoppingBasketIcon/>
                       {/* {Number of items in the basket} */}
                       <span className="header_optionLineTwo header_BasketCount">{basket?.length}</span>

                    </div>

                </Link>

            </div>
            {/* {basket icon with number} */}
        </nav>
    );
};

export default Header;