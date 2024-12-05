import Home from "./Home";
import Tabs from "../components/Tabs";
import About from "../pages/About";
import Email from "../pages/Email";
import Footer from "../pages/Footer";




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
                    <Email></Email>
               </div>
              
              <Footer></Footer>

          </div>

     );
};

export default Root;
