import Home from "./Home";
import Tabs from "../components/Tabs";
import About from "../pages/About";
import Email from "../pages/Email";
import Footer from "../pages/Footer";




const Root = () => {

     console.log(
          "%c Ello there!\n" +
          "I built this in just ONE day, so please don't judge me too harshly. 😅\n" +
          "Hope you like it! ",
          "color: white; background-color: #9E98BC; font-family: Ubuntu; font-size: 12px; font-weight: bold; padding: 1px; border-radius: 5px;"
     );

     return (
          <div className="font-ubuntu relative">

               {/* Home Section */}
               <div id="home-section">
                    <Home />


               </div>

               {/* Main Content */}
               <div className="container mx-auto">
                    <About></About>
                    
                    <Tabs />
                    <Email></Email>
               </div>

               <Footer></Footer>

          </div>

     );
};

export default Root;
