
import Home from "./Home";
import Tabs from "../components/Tabs";


const Root = () => {
     return (
          <div>
               {/* Home Section */}
               <div id="home-section">
                    <Home />
               </div>

               {/* Main Content */}
               <div className="container mx-auto">

                    {/* <Outlet /> */}

                    <Tabs></Tabs>
               </div>
          </div>
     );
};

export default Root;
