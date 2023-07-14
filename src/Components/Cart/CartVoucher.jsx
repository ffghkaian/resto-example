import React, { useState } from "react";
import { AppContext, AppDispatch } from '../../Utils/Context/AppContext'

const initialState = {
  voucherKey: '',
}

const CartVoucher = () => {
  const dispatch = AppDispatch();
  
 const [code, setCode] = useState(initialState)
 
 const changeHandler = (e) => {
   setCode((prevCode) => {
     return {...prevCode, voucherKey: e.target.value}
   })
 }
 
 const clickHandler = (e) => {
  dispatch({ type: 'code_voucher', payload: code.voucherKey})
  e.preventDefault();
   setCode((prevCode) => {
     return {...prevCode, voucherKey: ''}
   })
 }
  return (
    <form style={{ display: "flex" }} >
      <input 
        onChange={(e) => changeHandler(e)}
        type="text" 
        placeholder="Input your voucher code"
        value={code.voucherKey}
      />
      <div>
        <button
          className="voucher-btn"
          onClick={clickHandler}
        >VOUCHER</button>
      </div>
    </form>
  );
};

export default CartVoucher
