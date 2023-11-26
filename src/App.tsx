import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { ItemsProvider } from "./Contexts/ItemsContext";

function App() {

  return (
    <div>
      <ItemsProvider>

        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </ItemsProvider>
    </div>

  );
}
export default App;
