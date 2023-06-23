import React from "react";

const Board = ({ title, icon, children, vertical, header, className }) => {
  return (
    <div
      className={`flex ${
        vertical ? "flex-row" : "flex-col"
      } bg-white rounded-3xl border-2 border-gray-300 shadow-xl overflow-hidden w-full h-full ${className}`}
    >
      <div
        className={`bg-black flex items-center justify-center relative ${
          vertical ? "h-full w-10" : "h-10 w-full"
        }`}
      >
        <p className={`text-white mx-2 ${vertical ? "text-vertical" : ""}`}>
          {title}
        </p>

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
