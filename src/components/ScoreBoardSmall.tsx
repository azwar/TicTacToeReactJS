import React from "react";
import { ScoreBoardProps } from "../types";
import { OImage, XImage } from "./Item";

const SmallPlayerImage = ({ strPlayer } : {strPlayer: string}) => {
  return (
    <>
    {strPlayer === 'X' ? <XImage size={20} /> : <OImage size={20} /> }
  </>
  )
};
const ScoreBoardSmall = (props: ScoreBoardProps) => {
  return (
    <div className="flex flex-row bg-lime-300 align-baseline rounded-lg mb-5">
      <div className="flex flex-row px-2 bg-orange-300 rounded-lg font-bold text-lg pt-0 pb-0 items-center rounded-r-none rounded-rb-none">
        <SmallPlayerImage strPlayer={props.team} />
        <span className="px-2">won</span>
      </div>
      <div className="text-2xl md:text-4xl self-center px-2">{props.score}</div>
      <div className="self-center">time(s)</div>
    </div>
  );
};

export default ScoreBoardSmall;
