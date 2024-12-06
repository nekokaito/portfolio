import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = () => {

     const particlesInit = useCallback(async engine => {
          console.log(engine);
          await loadSlim(engine);
     }, []);

     const particlesLoaded = useCallback(async container => {
          console.log("Particles Loaded:", container);
     }, []);

     return (
          <Particles
               id="tsparticles"
               init={particlesInit}
               loaded={particlesLoaded}
               options={{
                    "fullScreen": {
                         "enable": true,
                         "zIndex": -1
                    },
                    "particles": {
                         "number": {
                              "value": 20,
                              "density": {
                                   "enable": true,
                                   "value_area": 800
                              }
                         },
                         "color": {
                              "value": "#9C96BC"
                         },
                         "shape": {
                              "type": "circle",
                              "stroke": {
                                   "width": 0,
                                   "color": "#ffffff23"
                              },
                              "polygon": {
                                   "nb_sides": 5
                              }
                         },
                         "opacity": {
                              "value": 0.4,
                              "random": false,
                              "anim": {
                                   "enable": true,
                                   "speed": 1,
                                   "opacity_min": 0.2,
                                   "sync": false
                              }
                         },
                         "size": {
                              "value": 6,
                              "random": true,
                              "anim": {
                                   "enable": true,
                                   "speed": 2,
                                   "size_min": 1,
                                   "sync": false
                              }
                         },
                         "line_linked": {
                              "enable": true,
                              "distance": 140,
                              "color": "#999",
                              "opacity": 0.7,
                              "width": 0.8
                         },
                         "move": {
                              "enable": true,
                              "speed": 0.4,
                              "direction": "none",
                              "random": false,
                              "straight": false,
                              "out_mode": "out",
                              "attract": {
                                   "enable": false,
                                   "rotateX": 600,
                                   "rotateY": 1200
                              }
                         }
                    },
                    "interactivity": {
                         "detect_on": "canvas",
                         "events": {
                              "onhover": {
                                   "enable": true,
                                   "mode": "grab"
                              },
                              "onclick": {
                                   "enable": true,
                                   "mode": "bubble"
                              },
                              "resize": true
                         },
                         "modes": {
                              "grab": {
                                   "distance": 250,
                                   "line_linked": {
                                        "opacity": 0.8
                                   }
                              },
                              "bubble": {
                                   "distance": 300,
                                   "size": 5,
                                   "duration": 1,
                                   "opacity": 5,
                                   "speed": 5
                              },
                              "repulse": {
                                   "distance": 300
                              },
                              "push": {
                                   "particles_nb": 4
                              },
                              "remove": {
                                   "particles_nb": 2
                              }
                         }
                    }
               }
               } />
     );
};

export default Particle;
