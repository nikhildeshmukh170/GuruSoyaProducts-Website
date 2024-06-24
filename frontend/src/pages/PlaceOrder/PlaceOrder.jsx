import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import axios from 'axios';
import logo from '../../assets/BL_bg-Logo.png';
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, item_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    setError(null); // Clear any previous errors

    const totalAmount = getTotalCartAmount() === 0 ? 0 : getTotalCartAmount();

    // Check if the cart total is zero
    if (totalAmount === 0) {
      setError("Cart total is zero.");
      return;
    }

    // Prepare options for Razorpay
    const options = {
      key: "rzp_test_zvn4xK1lXFOMrc", // Fetch Razorpay key from .env
      amount: totalAmount * 100, // Amount in paisa
      currency: 'INR',
      name: 'Guru Soya Products',
      description: 'Test Transaction',
      image: logo,
      handler: function (response) {
        // Handle successful payment
        console.log('Payment successful:', response);
      },
      prefill: {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        contact: data.phone
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#229a26'
      },
      modal: {
        ondismiss: function () {
          console.log('Payment window closed without success');
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    // Make API request to place order
    const orderItems = item_list.filter(item => cartItems[item._id] > 0)
                                .map(item => ({ ...item, quantity: cartItems[item._id] }));
    const orderData = {
      address: data,
      items: orderItems,
      amount: totalAmount
    };

    try {
      console.log("Sending order data:", orderData);
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token }
      });
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error placing order", error);
      setError(error.response?.data?.message || "Error placing order");
    }
  };

  return (
    <div>
      <form onSubmit={placeOrder} className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First name' name="firstName" value={data.firstName} onChange={onChangeHandler} required />
            <input type="text" placeholder='Last name' name="lastName" value={data.lastName} onChange={onChangeHandler} required />
          </div>
          <input type="email" placeholder='Email address' name="email" value={data.email} onChange={onChangeHandler} required />
          <input type="text" placeholder='Street/Address' name="street" value={data.street} onChange={onChangeHandler} required />
          <div className="multi-fields">
            <input type="text" placeholder='City' name="city" value={data.city} onChange={onChangeHandler} required />
            <input type="text" placeholder='State' name="state" value={data.state} onChange={onChangeHandler} required />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' name="zipCode" value={data.zipCode} onChange={onChangeHandler} required />
            <input type="text" placeholder='Country' name="country" value={data.country} onChange={onChangeHandler} required />
          </div>
          <input type="text" placeholder='Phone no.' name="phone" value={data.phone} onChange={onChangeHandler} required />
        </div>
        <div className="place-order-right">
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
                <p className="free">FREE</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>&#8377; {getTotalCartAmount()}</b>
              </div>
            </div>
            <button type="button" onClick={placeOrder}>PLACE ORDER</button>
          </div>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default PlaceOrder;