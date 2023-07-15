import React, { useState } from "react"
import Tile from "./tile"
export default function Board(props) {

    return (
        <div className="block">
            {props.board.grid.map((ele, index) => (
                <div key={index}>
                    {ele.map((ele2, idx) => (
                        <Tile key={idx} ele={ele2} updateGame={props.updateGame} board={props.board} />

                    ))}
                </div>
            ))}
        </div>
    )
}