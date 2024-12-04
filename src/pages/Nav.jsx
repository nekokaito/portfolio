import { CgBrowser } from "react-icons/cg";
import { LuCodeXml } from "react-icons/lu";
import { RiToolsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const Nav = () => {
     return (
          <div className="flex justify-center items-center">
               <ul className="menu flex gap-2 md:gap-7 bg-base-200 menu-horizontal rounded-box">
                    <li>
                         <NavLink to="/"> <CgBrowser /> <span>Projects</span></NavLink>
                    </li>

                    <li>
                         <NavLink to="/skills">
                              <LuCodeXml /> <span>Skills</span>
                         </NavLink>
                    </li>

                    <li>
                         <NavLink to="/tools">
                              <RiToolsFill /><span>Tools</span>
                         </NavLink>
                    </li>
               </ul>
          </div>
     );
};

export default Nav;