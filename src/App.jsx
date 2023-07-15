import Game from "./game";
import React, { useState } from "react";
import Forms from "./forms";

export default function App() {
 
 

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
      
      <div className="flex justify-center mt-[25px]">
        
      <Forms  rows={rows} bombs={bombs} updateForm = {updateForm} />
        
      </div>
      {formSubmitted &&
        <Game key={gameID} rows={rows} bombs={bombs} />}
      
    </div>
  )
}