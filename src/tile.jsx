import React, { useEffect, useState } from "react";

export default function Tile(props) {
    const tile = props.ele;
    const size = parseInt(props.board.gridSize);
    const [sizing, setSizing] = useState(getInitialSizing());
    let touchTimer = null
    function handleLeftClick() {
        
        props.updateGame(tile, false);
    }

    function handleRightClick(event) {
        
        event.preventDefault();
        props.updateGame(tile, true);
    }

    function handleTouchStart(){
      touchTimer =  setTimeout(()=>{
          handleRightClick()
      },500)
    }

    function handleTouchEnd(){
        clearTimeout(touchTimer);
    }
    function handleTouchMove(){
        clearTimeout(touchTimer);
    }
    
    function updateTile() {
        let text = "-";
        const nearBomb = tile.adjacentBombCount();
        if (tile.explored) {
            if (tile.bombed) {
                text = "\u2622";
            } else {
                text = nearBomb > 0 ? `${nearBomb} ` : "";
            }
        } else if (tile.flagged) {
            text = "\u2691";
        }
        return text;
    }

    function getInitialSizing() {
        return window.innerWidth > 800
            ? { width: `${30 / size}vw`, height: `${30 / size}vw` }
            : { width: `${80 / size}vw`, height: `${80 / size}vw` };
    }

    useEffect(() => {
        function handleWindowResize() {
            setSizing(getInitialSizing());
        }

        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [size]);

    return (
        <span
            onClick={handleLeftClick}
            onContextMenu={handleRightClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            style={sizing}
            className="rounded hover:bg-gray-500  cursor-pointer inline-block table-cell align-middle text-center border-[1px] lg:border-[3px] border-solid border-[white]"
        >
            {updateTile()}
        </span>
    );
}
