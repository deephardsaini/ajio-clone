import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { caro1,caro2,caro3, caro4 } from "../db";
import Banner from "../components/Banner";


const HomePage = () => {
  // Render the components for the home page
  return (
    <div style={{ paddingTop: "50px", width:"100%"}}>
      <Carousel data={caro1} />
      <Carousel data={caro2} />
      <Banner
        image={
          "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30052024-FREEDEL-allorder.jpg"
        }
      />
      <Carousel data={caro3} />
      <Carousel data={caro4} />
      <Footer />
    </div>
  );
};

export default HomePage;
