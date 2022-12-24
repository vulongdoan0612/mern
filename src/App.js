import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
