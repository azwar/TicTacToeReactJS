import React, { useEffect, useState } from "react";
import "../App.css";
import Item from "./Item";
import ScoreBoard from "./ScoreBoard";
import { ScoreBoardProps } from "../types";
import { checkDraw, checkWinner } from "../services/GameLogic";
import { DialogModalEndGame } from "./DialogModalEndGame";
import ScoreBoardSmall from "./ScoreBoardSmall";

export type TicTacToeArr = string[][];
const DEFAULT_BOARD_SIZE = 3;

function TicTacToe() {
  const [winner, setWinner] = useState("");
  const [isGameEnding, setIsGameEnding] = useState(false);
  const [moveCounter, setMoveCounter] = useState(1);
  const [playerX, setPlayerX] = useState<ScoreBoardProps>({
    team: "X",
    score: 0,
  });
  const [playerO, setPlayerO] = useState<ScoreBoardProps>({
    team: "O",
    score: 0,
  });
  const [boardSize, setBoardSize] = useState(DEFAULT_BOARD_SIZE);
  const board: TicTacToeArr = new Array(boardSize)
    .fill(null)
    .map(() => new Array(boardSize).fill(null));
  const [arrTicTacToe, setArrTicTacToe] = useState<TicTacToeArr>(board);
  const [endGameDialogOpen, setEndGameDialogOpen] = useState(false);

  useEffect(() => {
    restart();
  }, [boardSize]);

  useEffect(() => {
  }, [arrTicTacToe]);

  const checkMovement = () => {
    const isWin = checkWinner(arrTicTacToe);
    const winer = getCurrentPlayerVal();

    if (isWin) {
      setIsGameEnding(true);

      if (winer === "X") {
        const tmpPlayer = { ...playerX };
        tmpPlayer.score = tmpPlayer.score + 1;
        setPlayerX(tmpPlayer);
        setWinner("X");
      } else {
        const tmpPlayer = { ...playerO, score: playerO.score + 1 };
        setPlayerO(tmpPlayer);
        setWinner("O");
      }

      setEndGameDialogOpen(true);
    } else {
      const isDraw = checkDraw(arrTicTacToe);

      if (isDraw) {
        setWinner("DRAW");
        setIsGameEnding(true);
        setEndGameDialogOpen(true);
      }
    }
  };

  const changeBoardSize = (event: any) => {
    const strSize = event.target.value;
    setBoardSize(parseInt(strSize));
  };

  const getCurrentPlayerVal = () => {
    return moveCounter % 2 === 0 ? "O" : "X";
  };

  const makeMove = (iRow: number, iCel: number) => {
    if (isGameEnding) {
      return;
    }

    if (arrTicTacToe[iRow][iCel]) {
      return;
    }

    const newArr = [...arrTicTacToe];
    newArr[iRow][iCel] = getCurrentPlayerVal();

    setArrTicTacToe(newArr);
    setMoveCounter(moveCounter + 1);
    checkMovement();
  };

  const restart = () => {
    const board: TicTacToeArr = new Array(boardSize)
      .fill(null)
      .map(() => new Array(boardSize).fill(null));
    setArrTicTacToe(board);
    setMoveCounter(1);
    setIsGameEnding(false);
    setEndGameDialogOpen(false)
  };

  const handleQuitGame = () => {
    setEndGameDialogOpen(false);
  };

  return (
    <div className="flex justify-center bg-gradient-to-b from-cyan-500 to-blue-500 md:h-screen h-full">
      <div className="flex flex-row w-2/3 w-max md:max-w-2xl">
        <div id="scoreLeft" className="p-5 w-1/4 min-w-44 hidden md:block">
          <ScoreBoard {...playerX} />
        </div>
        <div id="game" className="flex flex-auto flex-col items-center mt-5">
          <div className="w-fullp-5">
            <h1 className="font-sans text-3xl font-bold mb-6">Tic Tac Toe</h1>
            <div className="flex w-full justify-center items-center ">
              <img
                src={process.env.PUBLIC_URL + "images/gamelogo.png"}
                alt="logo tictactoe"
                style={{ height: 100 }}
              />
            </div>
          </div>
          <div className="p-5">
            <div className="max-w-sm mx-auto">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 "
              >
                Select board size
              </label>
              <select
                id="countries"
                onChange={changeBoardSize}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-1"
              >
                <option value={3}>3</option>
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full sm:hidden">
          <ScoreBoardSmall {...playerX} />
          <ScoreBoardSmall {...playerO} />
        </div>
          <div className="bg-white mt-4 z-10">
            <div className="flex flex-col">
              {arrTicTacToe.map((row, iRow) => (
                <div className="flex flex-row">
                  {row.map((cel: string, iCell) => (
                    <Item
                      value={cel}
                      onClick={() => makeMove(iRow, iCell)}
                      boardSize={arrTicTacToe.length}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-40">
            <button
              id="reset"
              onClick={restart}
              className="button hover:ring-4 hover:ring-cyan-300 rounded-xl mt-8 px-6 py-3 bg-[#f3b236] hover:bg-[#30c4bd]"
            >
              Restart
            </button>
            <span className="mt-20">by Azwar Akbar</span>
          </div>
        </div>
        <div id="scoreRight" className="p-5 w-1/4 min-w-44 hidden sm:block">
          <ScoreBoard {...playerO} />
        </div>
      </div>
      {endGameDialogOpen && (
        <>
          <DialogModalEndGame
            winner={winner}
            handleQuitGame={handleQuitGame}
            handleNewGame={restart}
          />
        </>
      )}
    </div>
  );
}

export default TicTacToe;
