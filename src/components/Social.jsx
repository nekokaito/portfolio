import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { RiGithubLine, RiTwitterXFill } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";


const Social = () => {
     return (
          <div className="flex justify-center gap-5">
               <a href="https://github.com/nekokaito"><RiGithubLine size={30} /></a>

               <a href="https://www.facebook.com/siddiqsazzad"><BsFacebook size={30} /></a>
               <a href="https://x.com/nekokaito_"><RiTwitterXFill size={30} /></a>
               <a href="https://www.linkedin.com/in/siddiqsazzad/"><BsLinkedin size={30} /></a>
               <a href="https://discord.gg/tW9Xcu24uc"> <SiDiscord size={30} /></a>
          </div>
     );
};

export default Social;