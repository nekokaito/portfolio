import axios from "axios";
import { useEffect, useState } from "react";
import { CgBrowser } from "react-icons/cg";
import { LuCodeXml } from "react-icons/lu";
import { RiToolsFill } from "react-icons/ri";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";
import { AnimatePresence, motion } from "motion/react";
import ToolsCard from "./ToolsCard";


const Tabs = () => {

     const [tab, setTab] = useState('projects');

     const [projects, setProjects] = useState([]);
     const [error, setError] = useState(null);
     const [skills, setSkills] = useState([]);
     const [tools, setTools] = useState([]);

     useEffect(() => {
          // Fetch projects when the component loads
          const fetchProjects = async () => {
               try {
                    const response = await axios.get('https://raw.githubusercontent.com/nekokaito/json-data/refs/heads/main/project.json');
                    setProjects(response.data);
               } catch (err) {
                    setError('Failed to load projects. Please try again later.');
                    console.error(err);
               }
          };

          fetchProjects();
     }, []);



     useEffect(() => {
          axios.get('https://raw.githubusercontent.com/nekokaito/json-data/refs/heads/main/skills.json').then(res => setSkills(res.data))
     }, [])

     useEffect(() => {
          axios.get('https://raw.githubusercontent.com/nekokaito/json-data/refs/heads/main/tools.json').then(res => setTools(res.data))
     }, [])


     if (error) {
          return <p>{error}</p>;
     }
     console.log(tools)

     return (
          <div>
               <div className="flex justify-center items-center">
                    <ul className="menu flex gap-2 md:gap-7 bg-base-200 menu-horizontal rounded-box">
                         <li>
                              <button onClick={() => setTab('projects')}> <CgBrowser /> Projects </button>
                         </li>

                         <li>
                              <button onClick={() => setTab('skills')}>
                                   <LuCodeXml /> Skills
                              </button>
                         </li>

                         <li>
                              <button onClick={() => setTab('tools')}>
                                   <RiToolsFill />Tools
                              </button>
                         </li>
                    </ul>

               </div>
               <div className="flex mt-20  justify-center items-center">


                    <AnimatePresence>
                         <motion.div
                              key={tab}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className={`grid ${tab === 'skills' || tab === 'tools'
                                   ? 'grid-cols-2'
                                   : 'grid-cols-1'
                                   } md:grid-cols-2 lg:grid-cols-3 gap-5`}
                         >
                              {tab === 'projects' &&
                                   projects.map((project) => (
                                        <ProjectCard key={project.id} project={project}></ProjectCard>
                                   ))}

                              {tab === 'skills' &&
                                   skills.map((skill) => (
                                        <SkillCard key={skill.id} skill={skill}></SkillCard>
                                   ))}

                              {tab === 'tools' && tools.map((tool) => (
                                   <ToolsCard key={tool.id} tool={tool}></ToolsCard>
                              ))}
                         </motion.div>
                    </AnimatePresence>






               </div>
          </div>
     );
};

export default Tabs;