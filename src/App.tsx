// importing pages
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";
import ShoppingCart from "./Pages/ShoppingCart";
import Footer from "./Components/Footer";

import { Routes, Route } from "react-router-dom";
import { ItemsProvider } from "./Contexts/ItemsContext";
import { CartProvider } from "./Contexts/CartContext";

// toast notification css
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (

    <ItemsProvider>
      <CartProvider>

        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>
        <Footer />

      </CartProvider>
    </ItemsProvider>

  );
}
export default App;
