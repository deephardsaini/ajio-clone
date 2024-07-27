import { Fragment } from "react"; 
import Navbar from "../components/Navbar.jsx"


const RootLayout = ({ children }) => {
  
  return (
    <Fragment>
      <div id="portfolio-bg"><Navbar />{children}</div>
    </Fragment>
  );
};

export default RootLayout;
