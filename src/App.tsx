import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import PageDisplay from './Pages/PageDisplay'
function App() {
  return (
    // for the content
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:page" element = {<PageDisplay />} />
      </Routes>
    </div>
  );
}
export default App;
