import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <div className='social-footer'>FOLLOW US</div>
    <div className="social-footer">
      <i className='fa-brands fa-instagram'></i>
      <i className='fa-brands fa-facebook'></i>
      <i className='fa-brands fa-whatsapp'></i>
      <i className='fa-brands fa-twitter'></i>
    </div>
    <div className='footer-section'>
      <div className="logo">
        wingz
      </div>
      <div className="footer-1">
          <ul>
            <li>Home</li>
            <li>Outlet</li>
            <li>Delivery</li>
          </ul>
      </div>
      <div className="footer-2">
        <ul>
          <li>About</li>
          <li>Contact US</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
    </footer>
  )
}

export default  Footer