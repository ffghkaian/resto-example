import { useNavigate } from "react-router-dom";
import { allTaste } from "../../Data/allProducts";
import "./Button.css";
import { AppDispatch, AppContext } from "../../Utils/Context/AppContext";

export const CountButton = (props) => {
  const dispatch = AppDispatch();

  return (
    <div className="count-button">
      <button
        onClick={() => dispatch({ type: "decrement", payload: props.id })}
      >
        -
      </button>
      <input type="text" value={props.count} readOnly/>
      <button
        onClick={() => dispatch({ type: "increment", payload: props.id })}
      >
        +
      </button>
      <div>
        <button
          className="remove-button"
          onClick={() =>
            dispatch({ type: "remove_from_cart", payload: props.id })
          }
        >
          <i className="fa-solid fa-trash-can"> </i>
          REMOVE
        </button>
      </div>
    </div>
  );
};

export const GoBack = () => {
  const history = useNavigate();

  const backStyle = {
    background: "rgb(0,0,0, 0.3)",
    margin: "10px",
    padding: "5px 8px",
    border: "1px #d3d3d3 solid",
    borderRadius: "8px",
    fontSize: "22px",
    boxShadow: "0 0 0.3em rgb(0,0,0, 0.3)",
  };
  return (
    <i
      className="fa-solid fa-angle-left"
      onClick={() => history(-1)}
      style={backStyle}
    ></i>
  );
};

export const ScrollTaste = () => {
  return (
    <div className="card-taste">
      {allTaste.map((taste) => (
        <div key={taste.id} className="card-taste-scroll">
          <input type="radio" id={taste.id} />
          <label htmlFor={taste.id}>{taste.name}</label>
        </div>
      ))}
    </div>
  );
};

export const AddCart = (props) => {
  const dispatch = AppDispatch();
  const state = AppContext();
  const style = {
            margin: "10px",
            border: "none",
            padding: "5px 8px",
            borderRadius: "25px",
            background: "#fd4556",
            width: "fit-content",
            color: "whitesmoke",
          }
  const isDisabled = state.cart.some((product) => product.id === props.id);
  return (
    <> { !isDisabled ? (
        <button
          style={ style }
          onClick={() => dispatch({ type: "add_cart", payload: props.id })} 
        > Add
          <i
            className="fa-solid fa-shopping-cart"
            style={{
              fontSize: "14px",
              color: "whitesmoke",
              marginLeft: "10px",
            }}
          ></i>
        </button>
        ) : (
        <button
          style={ style }
          onClick={() =>
            dispatch({ type: "remove_from_cart", payload: props.id })
          }
        >
          REMOVE
          <i 
            style={{
              fontSize: "14px",
              color: "whitesmoke",
              marginLeft: "10px",
            }}
            className="fa-solid fa-trash-can"
          > </i>
        </button>
        )
      }
    </>
  );
};

//cart page
export const CartButton = (props) => {
  const state = AppContext();

  return (
    <button
      className="global-button fa-bag"
      style={props.style}
      onClick={props.onClick}
    >
      <i className="fa-solid fa-bag-shopping"></i> {state.cart.length}
    </button>
  );
};
