import React from "react";
import "./Cart.css";
import { AppContext } from "../../Utils/Context/AppContext";
import { CountButton, GoBack } from "../../Utils/Button/Button";
import { shippingCost } from '../../Data/OfferCode'
import CartVoucher from './CartVoucher'

function CartPage() {
  const state = AppContext();
  
  return (
    <div className="cart-page">
      <GoBack />
      <span style={{
          fontSize: '22px',
          fontWeight: 500,
        }}> MY CART</span>
      <hr />
      <div className="cart-container">
        {state.cart.map((product) => (
          <div className="cart-card" key={product.id}>
            <img
              alt=""
              src={product.image}
              style={{
                width: "120px",
                objectFit: "cover",
                aspectRatio: "3/2",
                borderRadius: "8px",
              }}
            />
            <div className="cart-name">
              <div style={{fontWeight: 500}}>
                {product.name}
              </div>
              <div style={{
                color: '#555555',
                marginTop: '10px',
                fontSize: '14px'
              }}>
                Price: Rp {product.price}.000
              <br />
                Total: Rp 
                {' ' + product.count * product.price } {product.count === 0 ? '' : '.000'}
              </div>
            </div>
            <div className="cart-button">
              <CountButton key={product.id} {...product}/>
            </div>
          </div>
        ))}
      </div>
      { state.cart.length > 0 ? 
      <div className="price-container">
        <h2>TOTAL PRICE</h2>
        <div className="price-box">
          <CartVoucher />
          <div className="sum-price-box">
            <div className='flex-beetwen'
              style={{color: '#555555'}}>
              Total price items: <span>Rp {state.totalPrice}{state.totalPrice === 0 ? '' : '.000'}</span>
            </div>
            <hr />
            <div className='flex-beetwen'
              style={{color: '#555555', marginTop: '10px'}}>
              Shipping cost: <span>Rp {shippingCost}.000</span>
            </div>
            <hr />
            <div className='flex-beetwen'
              style={{color: '#555555', marginTop: '10px'}}>
              Discount: <span>Rp -{shippingCost}.000</span>
            </div>
            <hr />
            <div className='flex-beetwen'
              style={{fontWeight: 600, marginTop: '10px'}}
            >
              Total Price: <span>Rp {state.totalPriceFinal}{state.totalPrice === 0 ? '' : '.000'}</span>
            </div>
            <hr />
          </div>
          <button 
            style={{
              background: '#fd4556',
              color: 'whitesmoke',
              width: '100%',
              margin: '10px 0',
              padding: '8px'
            }}
            className='global-button'
          >
            ORDER NOW
          </button>
        </div>
      </div> : 
      <div className='empty-products'>
        empty
      </div>
      }
    </div>
  );
}

export default CartPage;