import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { useState } from "react";
import {AllProductsType } from "./data/Data";
function App() {
  const [cartItems,setCartItems] =useState<AllProductsType> ([])
  function HandleCart() {
    
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home HandleCart={HandleCart} />} />
      </Routes>
    </div>
  );
}
export default App;
