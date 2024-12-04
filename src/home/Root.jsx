
import Home from "./Home";
import Nav from "../pages/Nav";
import { Outlet } from "react-router-dom";


const Root = () => {
     return (
          <div>
               {/* Home Section */}
               <div id="home-section">
                    <Home />
               </div>

               {/* Navbar */}
               <div id="nav-section" className="">
                    <Nav />
               </div>

               {/* Main Content */}
               <div className="container mx-auto">

                    <Outlet />
               </div>
          </div>
     );
};

export default Root;
