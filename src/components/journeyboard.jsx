import React from "react";
import Board from "./board";

const Journeyboard = () => {
  return (
    <div className="w-full jorney_board">
      <Board>
        <div className="flex justify-center w-full p-4">
          <button className="border border-blue-500 rounded-3xl px-5 py-2 bg-transparent hover:bg-purple-500 hover:text-white transition-colors text-5xl text-blue-500">
            1
          </button>
        </div>
      </Board>
    </div>
  );
};

export default Journeyboard;
