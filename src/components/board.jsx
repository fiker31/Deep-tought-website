import React from "react";

const Board = ({ title, icon, children, vertical, header }) => {
  return (
    <div
      className={`flex ${
        vertical ? "flex-row" : "flex-col"
      } bg-white rounded-lg border-2 border-gray-300 shadow-xl overflow-hidden w-full h-full`}
    >
      <div
        className={`bg-black flex items-center justify-center relative ${
          vertical ? "px-2 h-full" : "h-10 w-full"
        }`}
      >
        <span className={`text-white ${vertical ? "text-vertical" : ""}`}>
          {title}
        </span>

        <div
          className={`absolute text-white ${vertical ? "top-1" : "right-3"}`}
        >
          {icon}
        </div>
      </div>
      {header ? (
        <div className="border-b shadow-md px-3 py-6">
          <span className="font-bold">Description: </span>
          {header}
        </div>
      ) : (
        <></>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Board;
