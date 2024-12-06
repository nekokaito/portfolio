import { useMemo } from "react";


const DiscordApi = () => {
     
     const imageUrl = useMemo(() => {
          return "https://lanyard.kyrie25.me/api/705335206286065685?bg=282a36&imgStyle=circle&animatioanDuration=4s&waveColor=6272a4&waveSpotifyColor=1db954&hideDiscrim=true&borderRadius=30px&hideBadges=true";
     }, []);

     return (
          <div className="flex mt-32 justify-center items-center">
               <img
                    className="w-[300px] md:w-[370px]"
                    src={imageUrl}
                    alt="Discord Profile"
                    loading="lazy" 
               />
          </div>
     );
};

export default DiscordApi;
