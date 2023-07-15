import Game from "./game";
import React, { useState } from "react";
import Forms from "./forms";

export default function App() {
 
  const messageSm = "Hold to flag"
  const messageLg = "Right Click to flag"

  const [rows, setRows] = useState(4);
  const [bombs, setBombs] = useState(4);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [gameID , setGameID] = useState(0)

  function updateForm(rows,bombs){
    setGameID(gameID + 1)
    setRows(rows);
    setBombs(bombs);
    setFormSubmitted(true);
   
  }

  return (
    <div className="text-xl md:text-4xl">
      <span className="flex justify-center mt-[50px]">
        <h1>{screen.width > 1000 ? messageLg : messageSm}</h1>
      </span>
      <div className="flex justify-center mt-[50px]">
        
      <Forms  rows={rows} bombs={bombs} updateForm = {updateForm} />
      </div>
      {formSubmitted &&
        <Game key={gameID} rows={rows} bombs={bombs} />}
    </div>
  )
}