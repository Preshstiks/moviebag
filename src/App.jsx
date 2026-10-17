import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";

import Home from "./pages/Home";
import Favourite from "./pages/Favourites";
import NavBar from "./assets/components/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
