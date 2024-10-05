import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Checkout.css"; // Checkout styles
import visaLogo from "../../assets/vlogo.png";
import mastercardLogo from "../../assets/mlogo.png";

const Checkout = () => {
  return (
    <div className="checkout-page">
      <Navbar title="Checkout" />

      <div className="checkout-container">
        {/* Payment Form */}
        <form className="payment-form">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="Enter your card number"
          />

          <label htmlFor="cardHolder">Cardholder Name</label>
          <input
            type="text"
            id="cardHolder"
            placeholder="Enter cardholder's name"
          />

          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" placeholder="MM/YY" />

          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="CVV" />

          {/* Payment Provider Logos */}
          <div className="payment-logos">
            <img src={visaLogo} alt="Visa" />
            <img src={mastercardLogo} alt="MasterCard" />
          </div>

          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
