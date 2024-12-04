import axios from "axios";
import { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard";



const Skill = () => {

     const [skills, setSkills] = useState([]);

     useEffect(() => {
          axios.get('https://raw.githubusercontent.com/nekokaito/json-data/refs/heads/main/skills.json').then(res => setSkills(res.data))
     }, [])

     console.log(skills)

     return (
          <div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-7 container mx-auto w-full mt-20 gap-5">

                    {skills.map(skill => <SkillCard key={skill.id} skill={skill}></SkillCard>)}

               </div>

          </div>
     );
};

export default Skill;