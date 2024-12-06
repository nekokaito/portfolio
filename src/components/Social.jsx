import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";
import { RiGithubLine, RiTwitterXFill } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";

const socialLinks = [
     { href: "https://github.com/nekokaito", icon: <RiGithubLine size={30} />, label: "GitHub" },
     { href: "https://www.facebook.com/siddiqsazzad", icon: <BsFacebook size={30} />, label: "Facebook" },
     { href: "https://x.com/nekokaito_", icon: <RiTwitterXFill size={30} />, label: "Twitter (X)" },
     { href: "https://www.linkedin.com/in/siddiqsazzad/", icon: <BsLinkedin size={30} />, label: "LinkedIn" },
     { href: "https://discord.gg/tW9Xcu24uc", icon: <SiDiscord size={30} />, label: "Discord" },
     { href: "/Resume.pdf", icon: <FaRegFileLines size={30} />, label: "My Resume" }
];

const Social = () => {
     return (
          <div className="flex justify-center gap-5">
               {socialLinks.map(({ href, icon, label }) => (
                    <div className="tooltip" data-tip={label} key={label}>
                         <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                              {icon}
                         </a>
                    </div>
               ))}
          </div>
     );
};

export default Social;
