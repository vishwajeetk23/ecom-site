import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./../css/Header.css";
import {
    Link
  } from "react-router-dom";


function Header() {
    return (
        <>
        <div className="header">
            <Link to="/">
            <img className="header__logo" alt="logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello, Sign in</span>
                    <span className="header__optionLineTwo">Accounts & Lists</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <Link to="/cart">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="header__bottom">
            <ul>
                <li>All</li>
                <li>Mobile</li>
                <li>Category</li>
                <li>Computer</li>
                <li>Clothes</li>
                <li>Music</li>
                <li>Footwears</li>
            </ul>
        </div>
    </>
    );
}

export default Header;
