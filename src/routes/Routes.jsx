import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetails";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import Cart from "../pages/Cart"; // Ensure the correct path to the Cart component

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product/:category" element={<ProductPage />} />
        <Route path="/product/:category/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartcontext" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;