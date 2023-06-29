import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Form from "./form";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CommentIcon from "@mui/icons-material/Comment";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AddIcon from "@mui/icons-material/Add";
import youtube from "../assets/youtube.png";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import SpaIcon from "@mui/icons-material/Spa";

const ThreadBuilder = ({ data }) => {
  return (
    <div>
      <div className="flex p-2 bg-yellow-100 items-center">
        <KeyboardArrowUpIcon color="black" />
        <h3 className="ml-16 font-bold text-lg">Thread A</h3>
      </div>
      <div className="m-8 grid grid-cols-2 gap-x-4 gap-y-4">
        <Form label="Sub thread 1" />
        <Form label="Sub Interpretation 1" />
        <div className="flex justify-end items-center">
          <div className="grid grid-cols-4 gap-2">
            <LightbulbIcon color="black" />
            <CommentIcon color="black" />
            <LiveHelpIcon color="black" />
            <SpaIcon color="black" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-0.5">
          <div className="flex justify-between items-center px-1 py-3 rounded-lg shadow-lg">
            <span className="text-xs font-bold">Select Categ</span>
            <KeyboardArrowUpIcon color="black" fontSize="14dp" />
          </div>
          <div className="flex justify-between items-center px-1 py-3 rounded-lg shadow-lg">
            <span className="text-xs font-bold">Select Proces</span>
            <KeyboardArrowUpIcon color="black" fontSize="14dp" />
          </div>
        </div>
      </div>
      <div className="px-8 py-4">
        <button className="rounded-xl bg-blue-800 flex justify-between py-3 px-4 my-2 text-white w-fit">
          <AddIcon />
          <p>Sub-thread</p>
        </button>
        <Form label="Summary for Thread A" />
      </div>
    </div>
  );
};
export default ThreadBuilder;
