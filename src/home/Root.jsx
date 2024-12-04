import { Outlet } from "react-router-dom";
import Home from "./Home";
import About from "../pages/About";


const Root = () => {
     return (
          <div>

               <Home></Home>
               <div className="container mx-auto">
                    <About></About>
                    <Outlet></Outlet>
               </div>






          </div>
     );
};

export default Root;