import React, { useEffect } from 'react'
import playbtn from '../assets/playbtn.png'

const StartGameScreen = ({gameMode,setGameMode}) => {

    const gameLevels = ['Easy','Medium','Hard']
    
    const easyMode = () => {setGameMode({...gameMode,level:'Easy'})}
    const hardMode = () => {setGameMode({...gameMode,level:'Hard'})}
    const mediumMode = () => {setGameMode({...gameMode,level:'Medium'})}
    const startGame = () => {gameMode.level !== null && setGameMode({...gameMode,gameStart:true})}
    
  return (
    <>
    <div className={`fixed top-0 right-0 z-50 duration-500 w-full h-screen flex items-center justify-center ${gameMode.gameStart ? 'opacity-0 invisible translate-y-8' : 'opacity-100 visible translate-y-0'}`}>
        <div className='w-2/3 relative h-3/4 flex items-center justify-evenly flex-col rounded-[84px] bg-white shadow-custom backdrop-blue-lg bg-opacity-40'>
            <div className='flex items-center gap-8'>
                {gameLevels.map((item,index)=>{
                    return(
                        <span onClick={()=>{setGameMode({...gameMode,level:item})}} className={`cursor-pointer rounded-sm flex text-[4rem] ${gameMode.level === item ? 'text-purple-500' : 'text-white'}`}><p>{item}</p></span>
                    )
                })}
            </div>
            <div onClick={startGame} className={`w-40 cursor-pointer animate-scale-bounce`}><img src={playbtn} className='' alt="" /></div>
        </div>
    </div>
    </>
  )
}

export default StartGameScreen