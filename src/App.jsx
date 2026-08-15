import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/watch/:id" element={<ProductDetails />} />
        <Route path="/admin" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
