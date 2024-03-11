import React from "react";
import { OImage, XImage } from "./Item";
import ConfettiExplosion from "react-confetti-explosion";

interface GameProps {
  winner: string;
  handleQuitGame(): void;
  handleNewGame(): void;
}

export const DialogModalEndGame = ({
  winner,
  handleQuitGame,
  handleNewGame,
}: GameProps) => {
  return (
    <>
      <div id="bigScreen" className="bg-gray-900/90 z-10 min-h-screen w-full absolute top-0 left-0 hidden md:block h-screen">
        <div className="w-full h-[250px] rounded-xl bg-[#1f3540] space-y-10 px-6 py-4 mx-auto mt-52 flex items-center justify-center flex-col">
          <ConfettiExplosion className="z-50" zIndex={100} />
          <h2 className="flex flex-col items-center justify-center space-y-6 text-2xl md:text-4xl font-bold">
            {winner !== "DRAW" ? (
              <>
                {winner === "X" ? <XImage size={50} /> : <OImage size={50} />}
                <p className="uppercase text-[#30c4bd]">Takes the Round</p>
              </>
            ) : (
              <>
                <p className="uppercase text-[#30c4bd] text-xl">
                  Wooaa It's DRAW, big
                </p>
              </>
            )}
          </h2>

          <div className="flex items-center justify-center space-x-16">
            <button
              onClick={handleQuitGame}
              className="button px-4 rounded-md py-1 bg-[#a8bdc8] hover:bg-[#718087] hover:ring-4 hover:ring-gray-400"
            >
              Close
            </button>
            <button
              onClick={handleNewGame}
              className="button px-4 rounded-md py-1 bg-[#f3b236] hover:bg-[#30c4bd] hover:ring-4 hover:ring-cyan-300"
            >
              Next Round
            </button>
          </div>
        </div>
      </div>
      <div id="smallScreen" className="bg-gray-900/90 z-10 min-h-full max-h-full w-full absolute top-0 left-0 block md:hidden h-full ">
        <div className="w-full h-[250px] rounded-xl bg-[#1f3540] space-y-10 px-6 py-4 mx-auto mt-52 flex items-center justify-center flex-col">
          <ConfettiExplosion className="z-50" zIndex={100} />
          <h2 className="flex flex-col items-center justify-center space-y-6 text-2xl md:text-4xl font-bold">
            {winner !== "DRAW" ? (
              <>
                {winner === "X" ? <XImage size={50} /> : <OImage size={50} />}
                <p className="uppercase text-[#30c4bd]">Takes the Round</p>
                
              </>
            ) : (
              <>
                <p className="uppercase text-[#30c4bd] text-xl">
                  Wooaa It's DRAW
                </p>
              </>
            )}
          </h2>

          <div className="flex items-center justify-center space-x-16">
            <button
              onClick={handleQuitGame}
              className="button px-4 rounded-md py-1 bg-[#a8bdc8] hover:bg-[#718087] hover:ring-4 hover:ring-gray-400"
            >
              Close
            </button>
            <button
              onClick={handleNewGame}
              className="button px-4 rounded-md py-1 bg-[#f3b236] hover:bg-[#30c4bd] hover:ring-4 hover:ring-cyan-300"
            >
              Next Round
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
