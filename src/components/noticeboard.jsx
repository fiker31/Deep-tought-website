import React from "react";
import Board from "./board";
import CloseIcon from "@mui/icons-material/Close";

const NoticeBoard = () => {
  return (
    <div className="jorney_board w-60">
      <div className="h-96 pl-32">
        <Board
          vertical
          title="Notice Board"
          className="tracking-wider"
          icon={<CloseIcon color="white" />}
        >
          <div className="justify-center w-full flex"></div>
        </Board>
      </div>
    </div>
  );
};

export default NoticeBoard;
