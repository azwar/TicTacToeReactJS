import React from "react";
import { ItemProps } from "../types";

export const XImage = ({ size } : {size?: number}) => {
  return (
    <img
    src={process.env.PUBLIC_URL + "images/x.png"}
    alt="logo tictactoe"
    style={{ height: size || 50, width: size }}
  />
  )
};

export const OImage = ({ size } : {size?: number}) => {
  return (
    <img
    src={process.env.PUBLIC_URL + "images/o.png"}
    alt="logo tictactoe"
    style={{ height: size || 50, width: size }}
  />
  )
};

const Item = (props: ItemProps) => {
  const { boardSize, onClick, value } = props;
  let size = 16;
  let iconSize = 50;

  if (boardSize) {

    if (boardSize === 6 || boardSize > 6) {
      size = 14;
      iconSize = 32;
    } 

    const style = `items-center justify-center h-${size} w-${size} border-4 border-black cursor-pointer`;
    return (
      <div
        className={style}
        onClick={onClick}
      >
        {!value ? (
          <div className=" h-8 w-8 rounded-ful"></div>
        ) : (
          <>
            {value === "X" ? (
              <XImage size={iconSize} />
            ) : (
              <OImage size={iconSize} />
            )}
          </>
        )}
      </div>
    );
  }

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
