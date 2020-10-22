import React from "react";
import "./BasketItem.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";


function BasketItem({ id, title, image, price, rating }) {
  
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id
    })
  }

  return (
    <div className="basketItem">
      <img
        src={image}
        alt="no internet"
      />
      <div className="basketItem__content">
        <h3>{title}</h3>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <p>
                  <StarIcon />
                </p>
              );
            })}
        </div>
      </div>
      <div className="basketItem__action">
        <button className="basketItem__remove"  onClick= {() => removeItem()}>Remove</button>
          <p className="basketItem__price">₹{price}</p>
      </div>
    </div>
  );
}

export default BasketItem;
