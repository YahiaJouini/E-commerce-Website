import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { ItemsProvider } from "./Contexts/ItemsContext";

function App() {

  return (
      <ItemsProvider>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </ItemsProvider>

  );
}
export default App;
