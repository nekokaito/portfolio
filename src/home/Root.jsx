import Home from "./Home";
import Tabs from "../components/Tabs";
import About from "../pages/About";




const Root = () => {
     return (
          <div className="font-ubuntu relative">

               {/* Home Section */}
               <div id="home-section">
                    <Home />
                    

               </div>

               {/* Main Content */}
               <div className="container mx-auto">
                    <About></About>
                    <h1 className="text-2xl md:text-3xl text-center mt-32 my-10 ">Highlights</h1>
                    <Tabs />
               </div>

               
          </div>

     );
};

export default Root;
