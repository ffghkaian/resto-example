import React from "react";
import { Link } from 'react-router-dom'
import { GoBack, CartButton } from "../../Utils/Button/Button";
import Card from "./Card";
import Search from "../../Components/Search/Search";
import "./Menu.css";
import CategoryFilter from './Filter'
import { FilterContext } from '../../Utils/Context/FilterProvider'

const Menu = () => {
  const filterState = FilterContext();
  
  const products = filterState.filterItems.filter((product) => {
    return product.name.includes(filterState.searchKey) || !filterState.searchKey;
  })
  return (
    <div className="menu">
      <GoBack/> 
        <Link to='/cart' 
          style={{ 
            position: 'absolute',
            right: '10px',
            top: '10px'
          }}>
          <CartButton />
        </Link>
      <img
        src="./Images/combo.png"
        alt=""
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div className="menu-search">
        <Search />
      </div>
      <div className="menu-title">
        <h2>{filterState.category}</h2>
        <span><CategoryFilter /></span>
      </div>
      <div className="menu-container">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Menu;