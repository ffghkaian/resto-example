import React from 'react';
import './Search.css'
import { FilterContext, FilterDispatch } from '../../Utils/Context/FilterProvider'

const Search = () => {
  const dispatch = FilterDispatch();
  const searchHandler = (e) => {
    dispatch({ type: 'SEARCH_KEYWORD', payload:
          e.target.value.toLowerCase() })
  }
  return (
    <div className='search-container sd'>
      What are you looking for ? 
      <div className="search-input">
        <i className='fa-solid fa-magnifying-glass'></i>
        <input 
          type='search'
          onChange={(e) => searchHandler(e)}
          onFocus={(e) => searchHandler(e)}
        /> 
      </div>
    </div>
  )
}

export default Search