import React from "react";
import { ItemProps } from "../types";

export const XImage = () => {
  return (
    <img
    src={process.env.PUBLIC_URL + "images/x.png"}
    alt="logo tictactoe"
    style={{ height: 50 }}
  />
  )
};

export const OImage = () => {
  return (
    <img
    src={process.env.PUBLIC_URL + "images/o.png"}
    alt="logo tictactoe"
    style={{ height: 50 }}
  />
  )
};

const Item = (props: ItemProps) => {
  return (
    <div
      className="items-center justify-center h-16 w-16 border-4 border-black cursor-pointer"
      onClick={props.onClick}
    >
      {!props.value ? (
        <div className=" h-8 w-8 rounded-ful"></div>
      ) : (
        <>
          {props.value === "X" ? (
            <XImage />
          ) : (
            <OImage />
          )}
        </>
      )}
    </div>
  );
};

export default Item;
