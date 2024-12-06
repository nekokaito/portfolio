import { TbInfoHexagonFilled } from "react-icons/tb";
import { Typewriter } from 'react-simple-typewriter'

const About = () => {
     return (
          <div data-aos="fade-right" className="md:w-1/2 mx-auto p-7 my-10 md:my-32">
               <h1 className=" flex gap-2 text-2xl font-exo text-center md:text-left my-5 md:text-4xl"> <TbInfoHexagonFilled className="mr-2 pt-2" /> About  <Typewriter
                    words={['Me', 'My Self']}
                    loop={10}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
               /> </h1>
               <p className="md:text-xl font-thin ">
                    Hello there! I am <span className="tooltip font-bold" data-tip="also know as Kaito">Siddiq Sazzad</span>, a <span className="tooltip font-bold" data-tip="MongoDB, Express, React, and Node.js">MERN</span> stack developer with 7-8 months of hands-on experience. I am currently pursuing my BSc in Computer Science and Engineering. In my first year, I focused on building a strong foundation in programming by learning C, C++, and Java (<span className="tooltip" data-tip="Object-Oriented Programming">OOP</span>). These early experiences helped me develop a problem-solving mindset and a passion for coding.

                    As a developer, I am quick to learn and adapt to new technologies, and I have a knack for organizing and structuring projects efficiently. My focus is on creating applications that are not just functional but also scalable, efficient, and user-friendly. Whether it is designing seamless front-end interfaces or enhancing back-end performance, I enjoy every step of the process.

                    I am always looking for opportunities to tackle new challenges, improve my skills, and bring ideas to life through code.
               </p>
          </div>
     );
};

export default About;