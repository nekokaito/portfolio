import { Outlet } from "react-router-dom";
import Home from "./Home";

import Nav from "../pages/Nav";


const Root = () => {
     return (
          <div>

               <Home></Home>
               <div className="container mx-auto">
                    <Nav></Nav>
                    <Outlet></Outlet>
               </div>






          </div>
     );
};

export default Root;