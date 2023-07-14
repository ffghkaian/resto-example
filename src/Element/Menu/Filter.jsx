import React from "react";
import { FilterContext, FilterDispatch } from '../../Utils/Context/FilterProvider'
import { AppContext } from '../../Utils/Context/AppContext'
//import {ShowToggle} from '../../Utils/Function/Function'

const CategoryFilter = () => {
  const state = FilterContext();
  const dispatch = FilterDispatch();
  const appState = AppContext();
  
  return (
    <div className="radio-box">
      <button onClick={() => dispatch({ type: 'ISOPEN'})}>
        Category <i className="fa-solid fa-angle-down"></i>
      </button>
      { state.isOpen && (
          <div className='filter-option-box'>
            <button onClick={()=> dispatch({type: 'ALL'})}>ALL</button>
            { 
              appState.allProducts.map((product) => 
                <button 
                  onClick={() => dispatch({type: product.category})}
                  key={product.id}>
                    {product.category}
                </button>
              )
            }
          </div>
        )
      }
    </div>
  );
};

export default CategoryFilter;
