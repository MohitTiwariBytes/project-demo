import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Cart.css";
import { database, generateUserToken } from "../../Backend/main"; // Import Firebase and token generator
import { ref, onValue, remove } from "firebase/database"; // Import Firebase methods for fetching and deleting data

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // State to store the cart items
  const [totalPrice, setTotalPrice] = useState(0); // State to store the total price

  // Fetch cart data using the user token from the Realtime Database
  useEffect(() => {
    const userToken = generateUserToken(); // Get the user's token
    const cartRef = ref(database, `cart/${userToken}`); // Reference to the user's cart in the database

    // Fetch the product details from the Realtime Database
    onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const cartList = Object.values(data); // Convert the object to an array of products
        setCartItems(cartList); // Update the state with the list of cart items

        // Calculate total price
        const total = cartList.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0
        );
        setTotalPrice(total.toFixed(2)); // Update the total price
      }
    });
  }, []);

  // Function to remove an item from the cart
  const handleRemoveFromCart = (itemTitle) => {
    const userToken = generateUserToken(); // Get the user's token
    const itemRef = ref(database, `cart/${userToken}/${itemTitle}`); // Reference to the specific item in the cart

    remove(itemRef) // Remove the item from Firebase
      .then(() => {
        console.log(`Item ${itemTitle} removed from cart`);
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.title !== itemTitle)
        ); // Update the state to remove the item locally
      })
      .catch((error) => {
        console.error("Error removing item:", error);
      });
  };

  return (
    <div className="main-cart-page">
      <div className="cart-page">
        <Navbar title={"Your Cart"}></Navbar>
        <div className="top">
          <div className="topText">
            <a href="/">Go Back</a>
            <h3> | ‎ ‎ {cartItems.length} Items in total</h3>
          </div>
          <div className="price">
            <span>₹{totalPrice}</span>
            <button
              onClick={() => {
                window.location.replace("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>

        {/* Cart Products */}
        <div className="products">
          {cartItems.map((item, index) => (
            <div className="main-card" key={index}>
              <div className="card">
                <div className="productImg">
                  <img height={"150px"} src={item.imgUrl} alt={item.title} />
                </div>
                <div className="title">
                  <h2>{item.title}</h2>
                  <div className="description">
                    <span>{item.description}</span>
                  </div>
                  <span>₹{item.price}</span>
                </div>
                <div className="buttons">
                  <button
                    style={{ width: "100%" }}
                    id="removeFromCartBtn"
                    onClick={() => handleRemoveFromCart(item.title)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
