import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Products/Product";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
