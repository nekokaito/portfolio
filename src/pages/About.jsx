import { TbInfoHexagonFilled } from "react-icons/tb";


const About = () => {
     return (
          <div className="md:w-1/2 mx-auto p-7 my-10 md:my-32">
               <h1 className=" flex text-2xl font-exo text-center md:text-left my-5 md:text-3xl"> <TbInfoHexagonFilled className="mr-2 pt-2" /> About Me </h1>
               <p className="md:text-xl font-thin ">
                    Hello there! I am <span className="tooltip font-bold" data-tip="also know as Kaito">Siddiq Sazzad</span>, a passionate MERN stack developer with around <i>7 to 8</i> months of hands-on experience. My journey in development has been fueled by a love for coding and an eagerness to solve complex problems. What sets me apart is my ability to quickly grasp and adapt to new concepts, as well as my knack for understanding and organizing projects at a structural level.

                    I thrive in creating efficient, scalable, and user-friendly applications. Whether it is designing intuitive front-end interfaces or optimizing back-end functionality, I am always up for a challenge and ready to learn something new.
               </p>
          </div>
     );
};

export default About;