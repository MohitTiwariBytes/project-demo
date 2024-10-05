import React, { useState } from "react";
import "./Card.css";
import Succes from "../../Components/Succes/Succes";
import { database, generateUserToken } from "../../Backend/main"; // Import the database and token generator
import { ref, set } from "firebase/database"; // Import the set and ref methods for Realtime Database

const Card = ({ title, description, price, imgUrl }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const userToken = generateUserToken(); // Get the user token

    // Create product details object
    const productDetails = {
      title: title,
      description: description,
      price: price,
      imgUrl: imgUrl,
    };

    // Store the product details in the Realtime Database under the user's token
    set(ref(database, `cart/${userToken}/${title}`), productDetails)
      .then(() => {
        console.log("Product added to cart successfully!");
        setIsAdded(true);
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });

    // Hide the success message after 1.5 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="main-card">
      <div className="card">
        <div className="productImg">
          <img height={"150px"} src={imgUrl} alt="" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <div className="description">
            <span>{description}</span>
          </div>
          <span>₹{price}</span>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              window.location.replace("/checkout");
            }}
          >
            Buy Now
          </button>
          <button id="addToCartBtn" onClick={handleAddToCart}>
            <i className="fa-solid fa-bag-shopping fa-2x"></i>
          </button>
        </div>
      </div>
      {isAdded && <Succes />}
    </div>
  );
};

export default Card;
