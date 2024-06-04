import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import logo from '../../assets/BL_bg-Logo.png';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formComplete, setFormComplete] = useState(false);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handlePayment = () => {
    const totalAmount = getTotalCartAmount() === 0 ? 0 : getTotalCartAmount();

    const options = {
      key: 'rzp_test_B6HcO0qllzn2dM', // Enter the Key ID generated from the Dashboard
      amount: totalAmount * 100, // Razorpay accepts amount in paisa (so multiply by 100)
      currency: 'INR',
      name: 'Guru Soya Products',
      description: 'Test Transaction',
      image: logo, // Use the imported logo
      handler: function (response) {
        setPaymentSuccess(true);
        setPaymentError(false);
        // Send customer details and payment details to backend for processing
        const customerDetails = {
          firstName,
          lastName,
          email,
          address,
          city,
          state,
          zipCode,
          country,
          phoneNumber
        };
        // You can make an API call to your backend here to process the payment and customer details
      },
      prefill: {
        name: `${firstName} ${lastName}`,
        email,
        contact: phoneNumber
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#229a26'
      },
      modal: {
        ondismiss: function () {
          setPaymentError(true);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Function to check if all required fields are filled
  const isFormComplete = () => {
    return (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      address !== '' &&
      city !== '' &&
      state !== '' &&
      zipCode !== '' &&
      country !== '' &&
      phoneNumber !== ''
    );
  };

  // Update form completeness state
  const updateFormComplete = () => {
    setFormComplete(isFormComplete());
  };

  return (
    <div>
      {paymentSuccess ? (
        <div className="success-message">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase. Your transaction has been completed successfully.</p>
        </div>
      ) : (
        <form action="" className='place-order'>
          <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
              <input type="text" placeholder='First name' value={firstName} onChange={(e) => { handleInputChange(e, setFirstName); updateFormComplete(); }} required />
              <input type="text" placeholder='Last name' value={lastName} onChange={(e) => { handleInputChange(e, setLastName); updateFormComplete(); }} required />
            </div>
            <input type="email" placeholder='Email address' value={email} onChange={(e) => { handleInputChange(e, setEmail); updateFormComplete(); }} required />
            <input type="text" placeholder='Street/Address' value={address} onChange={(e) => { handleInputChange(e, setAddress); updateFormComplete(); }} required />
            <div className="multi-fields">
              <input type="text" placeholder='City' value={city} onChange={(e) => { handleInputChange(e, setCity); updateFormComplete(); }} required />
              <input type="text" placeholder='State' value={state} onChange={(e) => { handleInputChange(e, setState); updateFormComplete(); }} required />
            </div>
            <div className="multi-fields">
              <input type="text" placeholder='Zip code' value={zipCode} onChange={(e) => { handleInputChange(e, setZipCode); updateFormComplete(); }} required />
              <input type="text" placeholder='Country' value={country} onChange={(e) => { handleInputChange(e, setCountry); updateFormComplete(); }} required />
            </div>
            <input type="text" placeholder='Phone no.' value={phoneNumber} onChange={(e) => { handleInputChange(e, setPhoneNumber); updateFormComplete(); }} required />
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
                  {/* <p>&#8377; {getTotalCartAmount() === 0 ? 0 : 2}</p> */}
                  <p className="free">FREE</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>&#8377; {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}</b>
                </div>
              </div>
              <button type="button" onClick={handlePayment} disabled={!formComplete}> PROCEED TO PAYMENT</button>
            </div>
            {paymentError && (
              <div className="error-message">
                <p>Payment was not successful. Please try again.</p>
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default PlaceOrder;
