import { PacmanLoader } from "react-spinners";


const Loading = () => {
     return (
          <div className="min-h-screen min-w-screen flex items-center justify-center">
               <PacmanLoader
                    color="#9C96BC"
                    size={30}
               />
          </div>
     );
};

export default Loading;