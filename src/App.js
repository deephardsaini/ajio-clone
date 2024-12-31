import "./App.css";
import RootLayout from "./layouts/RootLayout.jsx";
import AllRoutes from "./routes/Routes.jsx";
import React from 'react';
import { CartProvider } from './pages/CartContext';


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
