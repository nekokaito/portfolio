import { motion } from "motion/react";

/* eslint-disable react/prop-types */
const SkillCard = ({ skill }) => {
     const { skill_id, skill_name, skill_logo, skill_type, skill_use_case } = skill;

     return (
          < motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 * skill_id }}
               id={skill_id}
               className="flex gap-8 p-6 border rounded-3xl border-[#c4bebe36] mx-auto  md:w-full "
          >
               {/* Image Container */}
               <div className=" w-24 h-24 flex-shrink-0">
                    <img
                         className="w-full h-full rounded-2xl object-cover"
                         src={skill_logo}
                         alt={`${skill_name} logo`}
                    />
               </div>

               {/* Text Content  Container */}
               <div className="hidden md:flex flex-col justify-between flex-grow">
                    <div>
                         <h1 className="font-bold text-xl">{skill_name}</h1>
                         <p className="text-[9px] text-gray-500">{skill_type}</p>
                    </div>


               </div>
               <div className="hidden md:flex flex-col gap-4">
                    <h1 className="text-[9px] text-gray-500">Use case</h1>
                    <p className="text-sm">{skill_use_case}</p>
               </div>
          </motion.div>
     );
};

export default SkillCard;
