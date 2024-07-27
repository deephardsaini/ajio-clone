import "./App.css";
import RootLayout from "./layouts/RootLayout.jsx"; 
import AllRoutes from "./routes/Routes.jsx";
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';
import {Route,Routes}from "react-router-dom";

function App() {

  return (
    <RootLayout>
      <AllRoutes />
    </RootLayout>
   
    
  );
}

export default App;
