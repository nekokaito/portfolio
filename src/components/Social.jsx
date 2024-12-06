import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";
import { RiGithubLine, RiTwitterXFill } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";

const Social = () => {
     return (
          <div className="flex justify-center gap-5">
               <div className="tooltip" data-tip="GitHub">
                    <a href="https://github.com/nekokaito" target="_blank" rel="noopener noreferrer">
                         <RiGithubLine size={30} />
                    </a>
               </div>
               <div className="tooltip" data-tip="Facebook">
                    <a href="https://www.facebook.com/siddiqsazzad" target="_blank" rel="noopener noreferrer">
                         <BsFacebook size={30} />
                    </a>
               </div>
               <div className="tooltip" data-tip="Twitter (X)">
                    <a href="https://x.com/nekokaito_" target="_blank" rel="noopener noreferrer">
                         <RiTwitterXFill size={30} />
                    </a>
               </div>
               <div className="tooltip" data-tip="LinkedIn">
                    <a href="https://www.linkedin.com/in/siddiqsazzad/" target="_blank" rel="noopener noreferrer">
                         <BsLinkedin size={30} />
                    </a>
               </div>
               <div className="tooltip" data-tip="Discord">
                    <a href="https://discord.gg/tW9Xcu24uc" target="_blank" rel="noopener noreferrer">
                         <SiDiscord size={30} />
                    </a>
               </div>
               <div className="tooltip" data-tip="My Resume">
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                         <FaRegFileLines size={30} />
                    </a>
               </div>
          </div>
     );
};

export default Social;
