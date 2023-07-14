import React from "react";
import { outletImages } from "../../Data/Images";
import './Outlet.css'

const Outlet = () => {
  return (
    <div className="outlet-container mg-top-5vh">
      <h2>Wicth your best place</h2> 
      <div className='outlet-wraper'>
      {outletImages.map((place) => (
        <div className="outlet-card" key={place.id}>
          <img src={place.image} alt='' />
          <p>{place.name.toUpperCase()}</p>
        </div>
      ))}
      </div>
    </div>
  );
};


export default Outlet