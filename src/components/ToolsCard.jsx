import { motion } from "motion/react";

/* eslint-disable react/prop-types */
const ToolsCard = ({ tool }) => {
     const { tool_id, tool_name, tool_logo, tool_type, tool_use_case } = tool;

     return (
          <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2 * tool_id }}
               id={tool_id}
               className="flex gap-8 p-6 border rounded-3xl border-[#c4bebe36] mx-auto md:w-full"
          >
               {/* Image Container */}
               <div className="w-24 h-24 flex-shrink-0">
                    <img
                         className="w-full h-full rounded-2xl object-cover"
                         src={tool_logo}
                         alt={`${tool_name} logo`}
                    />
               </div>

               {/* Text Content Container */}
               <div className="hidden md:flex flex-col justify-between flex-grow">
                    <div>
                         <h1 className="font-bold text-xl">{tool_name}</h1>
                         <p className="text-[9px] text-gray-500">{tool_type}</p>
                    </div>
               </div>

               {/* Use Case Container */}
               <div className="hidden md:flex flex-col gap-4">
                    <h1 className="text-[9px] text-gray-500">Use case</h1>
                    <p className="text-sm">{tool_use_case}</p>
               </div>
          </motion.div>
     );
};

export default ToolsCard;
