import React from "react";
import Board from "./board";
import CloseIcon from "@mui/icons-material/Close";

const NoticeBoard = () => {
  return (
    <div className="w-full jorney_board">
      <div className="h-72 pl-10">
        <Board vertical title="Notice Board" icon={<CloseIcon color="white" />}>
          <div className="flex justify-center w-full"></div>
        </Board>
      </div>
    </div>
  );
};

export default NoticeBoard;
