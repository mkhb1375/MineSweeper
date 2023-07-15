
import React, { useState ,useEffect } from "react";
import * as Minesweeper from "../minesweeper.js";
import Board from "./board.jsx";
import './App.css'
import ScoreBoard from "./score_board.jsx";

export default function Game(props) {
    const rows = props.rows;
    const bombs = props.bombs;
    const [board, setBoard] = useState(new Minesweeper.Board(rows, bombs));
    const [gameState, setGameState] = useState("")
    const [reloadCount, setReloadCount] = useState(0)

    useEffect(()=>{
        setBoard(new Minesweeper.Board(rows, bombs))
        setGameState("")
        setReloadCount(reloadCount + 1)
    },[rows , bombs])

    


    function updateGame(tile, flagging) {
        if (flagging) {
            tile.toggleFlag();
            next();
        } else if (!tile.flagged && !tile.explored) {
            tile.explore();
            next();
        }


    }

    function checkEnd() {
        if (board.won()) {
            setGameState("You Won")
            return true

        }
        if (board.lost()) {
            setGameState("You Lost")
            return true
        }
        return false
    }

    function reload() {
        setBoard(new Minesweeper.Board(rows, bombs));
        setGameState("")
        setReloadCount(reloadCount + 1)

    }

    function next() {
        if (checkEnd()) {

        }
        else {
            updateBoard()
        }
    }

    function updateBoard() {
        const newBoard = new Minesweeper.Board(rows, bombs)
        newBoard.grid = board.grid
        setBoard(newBoard);
    }


    return (
        <div className="flex justify-center mt-[30px]">
            <div>
                <span className="block flex justify-center ">
                    <button onClick={reload} className="mb-[30px] lg:mb-[60px] border p-1 rounded hover:text-blue-500  lg:text-5xl text-4xl  align-middle;" >⟲</button>
                </span>


                <Board
                    board={board}
                    updateGame={updateGame}


                />
                <ScoreBoard message={gameState} count={reloadCount} />
            </div>
        </div>
    );
}

