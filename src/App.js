import "./App.css";
import RootLayout from "./layouts/RootLayout.jsx";
import AllRoutes from "./routes/Routes.jsx";
import React from 'react';
import { CartProvider } from './pages/CartContext';
import CartContext from './pages/CartContext'; // Check if this file is in src
import ProductDetail from './pages/ProductDetails'; // Correct the path if it's different


function App() {
  return (
    <CartProvider>
       <RootLayout>
       <AllRoutes />
      </RootLayout>
    </CartProvider>
  );
}

export default App;
