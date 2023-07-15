import React, { useState,useEffect } from "react"

export default function ScoreBoard(props) {
    const [time, setTime] = useState(0)
    const message = props.message
    
    useEffect(()=>{
      const timer =  setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000)

        if (message !== "") {
            clearInterval(timer)
        }

        return ()=>{clearInterval(timer)}
        

    },[message])
      
   useEffect(()=>{
    setTime(0)
    
   },[props.count])
 
    return (
        <div className="flex justify-center">
            <div>
                <span className="block text-center  p-3 m-4 lg:p-5 lg:m-5">{time}</span>
                <span className="block text-center text-[yellow]  p-1 m-1 lg:p-5 lg:m-5">{message}</span>
            </div>
        </div>
    )
}