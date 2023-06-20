import React from "react";
import Board from "./board";

const Journeyboard = () => {
  return (
    <div className="w-48">
      <Board>
        <button className="border border-purple-500 rounded-md px-4 py-2 bg-transparent hover:bg-purple-500 hover:text-white transition-colors text-lg">
          1
        </button>
      </Board>
    </div>
  );
};

export default Journeyboard;