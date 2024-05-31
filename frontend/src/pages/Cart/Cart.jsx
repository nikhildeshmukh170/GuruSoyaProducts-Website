import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, item_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  // Check if the cart is empty
  const isCartEmpty = Object.values(cartItems).every((item) => item === 0);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {isCartEmpty ? (
          <div className="cart-empty">
            <p>Cart is Empty</p>
            <hr />
          </div>
        ) : (
          item_list.map((item) => {
            if (cartItems[item.item_id] > 0) {
              return (
                <div key={item.item_id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.item_image} alt="" />
                    <p>{item.item_name}</p>
                    <p>&#8377; {item.item_rate}</p>
                    <p>{cartItems[item.item_id]}</p>
                    <p>&#8377; {item.item_rate * cartItems[item.item_id]}</p>
                    <p
                      onClick={() => removeFromCart(item.item_id)}
                      className="cross"
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null; // Return null for items not in the cart
          })
        )}

        {!isCartEmpty && (
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>&#8377; {getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>&#8377; {2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>&#8377; {getTotalCartAmount() + 2}</b>
                </div>
              </div>
              <button onClick={()=> navigate('/order')}> PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Promo Code" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
