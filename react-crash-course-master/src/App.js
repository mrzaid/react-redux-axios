import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AppNavbar from "./components/AppNavbar";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <AppNavbar title="React Store" />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
