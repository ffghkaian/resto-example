import React from "react";
import Header from "../Components/Header/Header";
import Carousel from "../Utils/Carousel/Carousel";
import { images } from "../Data/Images";
import "./Home.css";
import Search from "../Components/Search/Search";
import { allProducts, allTaste } from "../Data/allProducts";
import Outlet from '../Components/Outlet/Outlet'
import HomePromo from '../Components/Promotion/HomePromo'
import Clock from '../Utils/Clock/Clock'
import { Link } from 'react-router-dom'

const FavoritesToday = () => {
  return (
    <div className='fav-today'>
      {allProducts.map((product) => (
        <div className="fav-today-card" key={product.id}>
          <img src={product.image} alt="" />
          <p>{
          product.name[0].toUpperCase() + product.name.slice(1)
          }</p>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <Carousel images={images} />
        <Header />
      </div>
      <div className="menu-link-button">
      <Link to='/menu'>
        <button className="global-button">OPEN ALL MENUS</button>
       </Link>
      </div>
      <div className="main-content">
        <Search />
        <Clock />
        <HomePromo />
            <h2 className='sub-title'>WHAT ABOUT TASTE ?</h2>
        <div className="taste-container">
          <div className="taste-card">
            {
              allTaste.map((taste) => 
              <div key={taste.id}>
                <div className='taste-name'>
                {taste.id}. {taste.name}</div>
                <div className="taste-desc">
                  {taste.desc}
                </div> 
               </div>
              )
            }
          </div>
          <img src='./Images/combo.png' alt='' />
        </div>
        <h2 className="sub-title mg-top-5vh">FAVORITES TODAY</h2>
        <FavoritesToday />
        <Outlet />
        
      </div>
    </div>
  );
};

export default Home;
