import React from 'react';
import './Promotion.css'

const HomePromo = () => {
  return (
    <div className="promo-container">
        <img src='./Images/wings.png' alt=''
          className='bg-white img-1'
        />
      <div className="sec-2">
        <img src='./Images/wafle.png' alt=''
          className='bg-white img-2'
        />
        <img src='./Images/boneless.png' alt=''
          className='bg-white img-3'
        />
      </div>
    </div>
  )
}

export default HomePromo