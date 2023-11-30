// importing pages
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

import { Routes, Route } from "react-router-dom";
import { ItemsProvider } from "./Contexts/ItemsContext";

// toast notification css
import 'react-toastify/dist/ReactToastify.css';
import Chekout from "./Pages/Chekout";

function App() {

  return (

    <ItemsProvider>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path='/chekout' element={<Chekout />} />
      </Routes>

    </ItemsProvider>

  );
}
export default App;
