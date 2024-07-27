import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetails"


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:category" element={<ProductPage />} />
                <Route path="/:category/:id" element={<ProductDetailsPage />} />
            </Routes>
        </div>
    );
};

export default AllRoutes;
