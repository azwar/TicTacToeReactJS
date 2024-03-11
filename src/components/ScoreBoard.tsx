import React from "react";
import { ScoreBoardProps } from "../types";
import { OImage, XImage } from "./Item";

const PlayerImage = ({ strPlayer } : {strPlayer: string}) => {
  return (
    <>
    {strPlayer === 'X' ? <XImage /> : <OImage /> }
  </>
  )
};
const ScoreBoard = (props: ScoreBoardProps) => {
  return (
    <div className="flex flex-col bg-lime-300 align-baseline rounded-lg">
      <div className="flex flex-col bg-orange-300 rounded-lg font-bold text-lg pt-4 pb-2 items-center rounded-br-none rounded-bl-none">
        <PlayerImage strPlayer={props.team} />
        <span>won</span>
      </div>
      <div className="text-4xl py-4">{props.score}</div>
      <div className="py-2">time(s)</div>
    </div>
  );
};

export default ScoreBoard;
