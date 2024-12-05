
import Home from "./Home";
import Tabs from "../components/Tabs";


const Root = () => {
     return (
          <div className="font-ubuntu">
               {/* Home Section */}
               <div id="home-section">
                    <Home />
               </div>

               {/* Main Content */}
               <div className="container mx-auto">

                    {/* <Outlet /> */}
                    <h1 className="text-2xl md:text-3xl text-center my-10 ">Highlights</h1>
                    <Tabs></Tabs>
               </div>
          </div>
     );
};

export default Root;
