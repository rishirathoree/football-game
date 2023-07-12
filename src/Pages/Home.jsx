import React, { useEffect, useState } from 'react';
import StartGameScreen from '../Components/StartGameScreen';
import ball from '../assets/ball.png';

const Home = () => {
  const [gameMode, setGameMode] = useState({ level: null, gameStart: false });
  const [ballSpeed, setBallSpeed] = useState(0);
  const [correctValue,setCorrectValue] = useState(null)

  useEffect(() => {
    let increasing = true;

    const interval = setInterval(() => {
      if (increasing) {
        setBallSpeed((prevSpeed) => {
          if (prevSpeed < 100) {
            return prevSpeed + 1;
          } else {
            increasing = false;
            return prevSpeed - 1;
          }
        });
      } else {
        setBallSpeed((prevSpeed) => {
          if (prevSpeed > 0) {
            return prevSpeed - 1;
          } else {
            increasing = true;
            return prevSpeed + 1;
          }
        });
      }
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const setCurrentValueForWin = () => {
    let val = ballSpeed
    console.log(val)
    setCorrectValue(val)
  }

  return (
    <>
      <StartGameScreen gameMode={gameMode} setGameMode={setGameMode} />
      <div className="playground relative w-full h-screen">
        <div
          className={`absolute left-[45%] bottom-8 ${
            gameMode.gameStart ? 'bottom-8 visible opacity-100' : 'invisible opacity-0 invisible'
          }`}
        >
          {/* <button className='w-full absolute -top-40 right-52' onClick={()=>{setCorrectValue(null)}}>reset</button> */}
          <div className={`duration-500 ${correctValue > 40 && correctValue < 60 ? 'ballInOfGoal' : 'ballOutOfGoal'}`}><img onClick={setCurrentValueForWin} src={ball} className="w-32" alt="" /></div>
        </div>
        <div
          className={`w-2/3 h-8 rounded-full bg-gradient-to-l from-red-500 to-green-500 shadow-lg shadow-black/5 bg-black top-1/4 flex items-center justify-between p-4 z-50 absolute top-4 right-[15%] ${
            gameMode.gameStart ? 'visible' : 'invisible'
          }`}
        >
          <div
          style={{ left: `${ballSpeed}%` }}
            className={`w-[2px] h-10 bg-white absolute transition-all`}
          ></div>
          <p className="text-[10px] text-white">Too Early</p>
          <p className="text-[10px] text-white">Correct</p>
          <p className="text-[10px] text-white">Too Late</p>
        </div>
      </div>
    </>
  );
};

export default Home;
