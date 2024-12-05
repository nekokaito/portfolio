import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";


const Projects = () => {
     const [projects, setProjects] = useState([]);
     const [error, setError] = useState(null);

     useEffect(() => {
          
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

     if (error) {
          return <p>{error}</p>;
     }

     
     return (
          <div className="flex mt-20 justify-center items-center">



               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                         projects.map(project => <ProjectCard key={project.id} project={project} ></ProjectCard>)
                    }
               </div>







          </div>
     );
};

export default Projects;