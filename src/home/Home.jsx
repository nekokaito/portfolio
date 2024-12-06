import DiscordApi from "../components/DiscordApi";
import Social from "../components/Social";


const Home = () => {
     return (
          <div data-aos="fade-up"
               data-aos-anchor-placement="top-center" className="flex flex-col mt-32 gap-10 justify-center items-center h-screen">
               <div>
                    <img className="w-56 rounded-full" src="/profile.jpeg" alt="" />
               </div>

               <div className="flex flex-col gap-5">
                    <h1 className="text-2xl md:text-4xl font-exo text-center font-bold">Abubakar Siddiq Sazzad</h1>
                    <div className="flex justify-center gap-2">
                         <p>MERN Stack Developer</p>
                         <p>.</p>
                         <p>Problem Solver</p>
                    </div>
                    <div className="px-3 md:p-0">
                         <p className="text-center container text-[12px] mx-auto md:text-sm">Hi, I am a passionate MERN Stack Developer with a love for creating dynamic, user-friendly web applications.</p>

                         <p className="text-center container text-[12px] mx-auto md:text-sm"> My journey in coding began with a simple curiosity about how things work on the web, and it quickly grew into a career I love.</p>
                    </div>

                    <div>
                         <Social></Social>
                    </div>

                    <DiscordApi></DiscordApi>

               </div>
          </div>
     );
};

export default Home;