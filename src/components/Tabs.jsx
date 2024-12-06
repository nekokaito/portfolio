import { useEffect, useState } from "react";
import { CgBrowser } from "react-icons/cg";
import { LuCodeXml } from "react-icons/lu";
import { RiToolsFill } from "react-icons/ri";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";
import ToolsCard from "./ToolsCard";
import { AnimatePresence, motion } from "motion/react";

import playClick from "../hook/playClick";
import axios from "axios";
import Loading from "./Loading";

const Tabs = () => {
     const [tab, setTab] = useState("projects");
     const [data, setData] = useState({
          projects: [],
          skills: [],
          tools: [],
     });
     const [error, setError] = useState(null);
     const [loading, setLoading] = useState(true);

     const fetchData = async () => {
          try {
               const [projectsRes, skillsRes, toolsRes] = await Promise.all([
                    axios.get("https://raw.githubusercontent.com/nekokaito/json-data/refs/heads/main/project.json"),
                    axios.get("https://raw.githubusercontent.com/nekokaito/json-data/refs/heads/main/skills.json"),
                    axios.get("https://raw.githubusercontent.com/nekokaito/json-data/refs/heads/main/tools.json")
               ]);

               setData({
                    projects: projectsRes.data,
                    skills: skillsRes.data,
                    tools: toolsRes.data
               });
          } catch (err) {
               setError("Failed to load data. Please try again later.");
               console.error(err);
          } finally {
               setLoading(false);
          }
     };

     useEffect(() => {
          fetchData();
     }, []);

     const handleTabClick = (tabName) => {
          playClick();
          setTab(tabName);
     };

     if (loading) {
          return <Loading></Loading>;
     }

     if (error) {
          return <p className="text-3xl text-center my-10">{error}</p>;
     }

     return (
          <div data-aos="fade-up-right" className="">
               <h1 className="text-2xl md:text-4xl text-center mt-32 my-10 ">Highlights</h1>
               <div className="flex justify-center items-center">
                    <ul className="menu flex gap-2 md:gap-7 bg-[#9e98bc3d] menu-horizontal rounded-box">
                         {["projects", "skills", "tools"].map((item) => (
                              <li key={item}>
                                   <button onClick={() => handleTabClick(item)}>
                                        {item === "projects" && <CgBrowser />}
                                        {item === "skills" && <LuCodeXml />}
                                        {item === "tools" && <RiToolsFill />}
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                   </button>
                              </li>
                         ))}
                    </ul>
               </div>
               <div className="flex my-20 justify-center items-center">
                    <AnimatePresence>
                         <motion.div
                              key={tab}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className={`grid ${tab === "skills" || tab === "tools" ? "grid-cols-2" : "grid-cols-1"} md:grid-cols-2 lg:grid-cols-3 gap-5`}
                         >
                              {tab === "projects" &&
                                   data.projects.map((project) => <ProjectCard key={project.id} project={project} />)}
                              {tab === "skills" &&
                                   data.skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
                              {tab === "tools" &&
                                   data.tools.map((tool) => <ToolsCard key={tool.id} tool={tool} />)}
                         </motion.div>
                    </AnimatePresence>
               </div>
          </div>
     );
};

export default Tabs;
