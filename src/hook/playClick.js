

const clickSound = new Audio("/click.wav");


const playClick = () => {
  clickSound.currentTime = 0; 
  clickSound.play();
};


export default playClick;
