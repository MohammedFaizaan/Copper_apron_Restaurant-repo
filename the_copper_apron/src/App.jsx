import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food_Web from "./components/Food_Web";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Order_History from "./pages/Order_History";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Food_Web />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="orders" element={<Orders />} />
            <Route path="about" element={<About />} />
            <Route path="order_history" element={<Order_History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
