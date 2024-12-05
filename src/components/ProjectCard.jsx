/* eslint-disable react/prop-types */
import { FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNodedotjs, SiCss3, SiFirebase, SiBootstrap, SiPhp, SiCplusplus, SiPostgresql } from 'react-icons/si';
import { SiSteam, SiObsstudio, SiAdobe } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { RiJavaLine, RiTailwindCssFill } from 'react-icons/ri';
import { TiSocialGithub } from 'react-icons/ti';
import { TbBrowserShare } from 'react-icons/tb';
import { motion } from 'motion/react';

// Tool to icon mapping
const toolIcons = {
     MongoDB: <SiMongodb size={12} className="text-green-600" />,
     "Express.js": <SiExpress size={16} className="text-gray-600" />,
     React: <FaReact size={16} className="text-cyan-500" />,
     "Node.js": <SiNodedotjs size={16} className="text-green-700" />,
     CSS: <SiCss3 size={16} className="text-blue-600" />,
     Firebase: <SiFirebase size={16} className="text-yellow-500" />,
     Bootstrap: <SiBootstrap size={16} className="text-purple-600" />,
     "Steam Link": <SiSteam size={16} className="text-green-500" />,
     "OBS Studio": <SiObsstudio size={16} className="text-black" />,
     "Adobe Premiere Pro": <SiAdobe size={16} className="text-red-600" />,
     JavaScript: <IoLogoJavascript size={16} className="text-yellow-500" />,
     PHP: <SiPhp size={16} className="text-purple-600" />,
     C: <SiCplusplus size={16} className="text-blue-500" />,
     "C++": <SiCplusplus size={16} className="text-blue-500" />,
     Java: <RiJavaLine size={16} className="text-red-600" />,
     SQL: <SiPostgresql size={16} className="text-gray-600" />,
     Tailwind: <RiTailwindCssFill size={16} className="text-blue-600" />
};

const ProjectCard = ({ project }) => {
     const { id, projectName, projectCategory, icon, description, toolsUsed, githubLink, liveLink } = project;



     return (
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 * id }} className="card border p-5 border-[#9E98BC] hover:bg-[#9e98bc33] bg-base-100 w-96 shadow-xl">
               <div className="flex gap-5 ">
                    <img className="w-12 h-12 rounded-xl" src={icon} alt="Project Logo" />
                    <div className="flex flex-col gap-2">
                         <h1 className="text-2xl font-bold">{projectName}</h1>
                         <span className="text-sm font-semibold">{projectCategory}</span>
                    </div>
               </div>
               <div className="mt-3">
                    <p className="text-sm font-thin">{description}</p>
                    <div className="mt-5">

                         <div className="flex w-20 gap-4">
                              {toolsUsed.slice(0, 4).map((tool, index) => (
                                   <div key={index} className="flex items-center text-sm">
                                        {toolIcons[tool]}
                                        <span className="ml-2 text-[12px]">{tool}</span>
                                   </div>
                              ))}

                         </div>
                    </div>
               </div>
               <div className="mt-10 flex justify-end gap-2">
                    {githubLink && (
                         <a href={githubLink} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                              <button className='btn hover:bg-white hover:text-black '><TiSocialGithub />Repo</button>
                         </a>
                    )}

                    {
                         liveLink && (
                              <a href={liveLink} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                   <button className='btn hover:border-[#9E98BC] hover:bg-[#9E98BC] hover:text-black'><TbBrowserShare />Live</button>
                              </a>
                         )
                    }


               </div>
          </motion.div>
     );
};

export default ProjectCard;
