import React from "react";
import Board from "./board";
import CloseIcon from "@mui/icons-material/Close";

const NoticeBoard = () => {
  return (
    <div className="w-56 absolute right-0 top-0">
      <div className="h-96 pl-32">
        <Board
          vertical
          title="Notice Board"
          className="rounded-r-none"
          icon={<CloseIcon color="white" />}
        >
          <div className="justify-center w-full flex"></div>
        </Board>
      </div>
    </div>
  );
};

export default NoticeBoard;
