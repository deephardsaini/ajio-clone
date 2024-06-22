import { Fragment } from "react"; 
import Navbar from "../component/Navbar/Navbar"


const RootLayout = ({ children }) => {
  
  return (
    <Fragment>
      <div id="portfolio-bg"><Navbar />{children}</div>
    </Fragment>
  );
};

export default RootLayout;
