import React from "react";
import { ScrollTaste, AddCart } from '../../Utils/Button/Button'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className="menu-card">
    <Link to={`/${props.id}`}>
      <img src={props.image} alt="" />
      <div className="card-title">
        {props.name[0].toUpperCase() + props.name.slice(1)}
      </div>
    </Link>
      <div className="card-price">
        Price :<span>Rp {props.price}.000</span>
      </div>
      <ScrollTaste {...props}/>
      <div style={{
        textAlign: 'right',
        width: '100%'
      }}>
        <AddCart key={props.id} {...props}/>
      </div>
    </div>
  );
};

export default Card