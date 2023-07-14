import React, { createContext, useContext, useReducer } from "react";
import { allProducts } from "../../Data/allProducts";
import { offerCode, shippingCost } from '../../Data/OfferCode'

const CreateAppContext = createContext({});
const CreateAppDispatch = createContext({});

export const AppContext = () => {
  return useContext(CreateAppContext);
};
export const AppDispatch = () => {
  return useContext(CreateAppDispatch);
};

const initialState = {
  allProducts,
  cart: [],
  favorites: [],
  totalPrice: 0,
  totalPriceFinal: 0,
  count: 0,
  useVoucher: false,
  offerPrice: 0
};

const sumPrice = (items, useVoucher) => {
  const totalPrice = items.reduce((totalPrice, product) => {
    return totalPrice + product.count * product.price
  }, 0)
  if(useVoucher){
    let offerPrice = ( totalPrice * offerCode.disCount ) / 100;
    let totalAfterOffer = totalPrice - offerPrice;
    
    return {
      totalPrice,
      offerPrice,
      totalAfterOffer,
      ...sumPriceFinal(totalPrice, offerPrice)
    }
  } else {
    return {totalPrice, ...sumPriceFinal(totalPrice)}
  }
}

const sumPriceFinal = (totalPrice, offerPrice = 0) => {
  let totalPriceFinal = null;
  
  if(totalPrice - offerPrice <= 100){
    totalPriceFinal = totalPrice + shippingCost - offerPrice;
  } else {
    totalPriceFinal = totalPrice - offerPrice;
  }
  return {totalPriceFinal}
}

const appReducer = (state, action) => {
  switch (action.type) {
    case 'code_voucher': {
      if(offerCode.code === action.payload) {
        state.useVoucher = true;
      } else {
        
      }
      console.log('code_voucher :', state.offerPrice)
      return {
        ...state,
        ...state.useVoucher,
        ...sumPrice(state.cart, )
      }
    }
    case "add_cart": {
      const checkCart = state.cart.some(
        (product) => product.id === action.payload
      );
      if (!checkCart) {
        const mainItem = state.allProducts.find(
          (product) => product.id === action.payload
        );
        state.cart.push(mainItem);
      }
      return {
        ...state,
        ...sumPrice(state.cart)
      };
    }
    case 'increment': {
      const plusIndex = state.cart.findIndex(
        (product) => product.id === action.payload
      )
      state.cart[plusIndex].count++;
      return {
        ...state,
        ...sumPrice(state.cart)
      }
    }
    case 'decrement': {
      const minusIndex = state.cart.findIndex(
        (product) => product.id === action.payload
      )
      const setCount = state.cart[minusIndex].count;
      if(setCount > 0) {
        state.cart[minusIndex].count--;
      }
      return {
        ...state,
        ...sumPrice(state.cart)
      }
    }
    case 'remove_from_cart': {
      state.cart.findIndex(
        (product) => product.id === action.payload
      )
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      )
      return {
        ...state,
        ...sumPrice(state.cart)
      }
    }
    default:
      return state;
  }
};

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <CreateAppContext.Provider value={state}>
      <CreateAppDispatch.Provider value={dispatch}>
        {children}
      </CreateAppDispatch.Provider>
    </CreateAppContext.Provider>
  );
}
