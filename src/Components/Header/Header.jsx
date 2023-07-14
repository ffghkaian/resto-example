import React from "react";
import { Link } from 'react-router-dom'
import './Header.css';
import { CartButton } from '../../Utils/Button/Button'

const Header = () => {
  return (
    <header className='pd-1vh'>
      <button className="global-button cl-white border">
        <i className="fa-solid fa-location-dot"></i>
        Your Location
      </button>
      <div className="section-2">
        <button className="global-button cl-white fw-600">
          RESTAURANT
        </button>
        <button className="global-button cl-white fw-600">
          DELIVERY
        </button>
        <Link to='/cart'>
          <CartButton />
        </Link>
        <button className="global-button cl-white">
          <i className='fa-regular fa-user'></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
