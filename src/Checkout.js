import React from "react";
import BasketItem from "./BasketItem";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  var totalPrice = 0;

  return (
    <div className="checkout">
      <img
        className="checkout__add"
        src="https://static.businessinsider.com/image/5ceee4fa11e205247e034e57-1200/amazon%20prime%20banner.png"
      />
      <div className="checkout__info">
        <div className="checkout__left">
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <h4 className="checkout__total">
            {" "}
            Total number of items in the cart: {basket?.length}
          </h4>
          <div className="checkout__left__content">
            {basket.map((item) => {
              totalPrice = totalPrice + item.price;
              return (
                <BasketItem
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="checkout__right">
          <SubTotal totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
