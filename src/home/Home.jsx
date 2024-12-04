

const Home = () => {
     return (
          <div className="flex flex-col gap-10 justify-center items-center h-screen">
               <div>
                    <img className="w-56 rounded-full" src="/profile.jpeg" alt="" />
               </div>

               <div>
                    <h1 className="text-4xl font-bold">Abubakar Siddiq Sazzad</h1>
                    <div className="flex justify-center gap-2">
                         <p>MERN Stack Developer</p>
                         <p>.</p>
                         <p>Problem Solver</p>
                    </div>

               </div>
          </div>
     );
};

export default Home;