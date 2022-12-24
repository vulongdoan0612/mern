import React from "react";
import { useSelector } from "react-redux";
import "./CartScreen.css";
export default function CartScreen() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  console.log(cartItems);

  return (
    <div className="wrapper">
      <div className="cart-left">
        <h1>My Cart</h1>
        {cartItems.map((item) => {
          return (
            <div className="content-cart">
              <div className="info-item">
                <h5>Name: {item.name}</h5>
                <h5>
                  Price: {item.quantity} * {item.prices[0][item.varient]} ={" "}
                  {item.price}
                </h5>
              </div>
              <div className="image-item">
                <img src={item.image.pic} alt=""></img>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-right">
        <h1>SubTotal=</h1>
        <button>Pay Now</button>
      </div>
    </div>
  );
}
