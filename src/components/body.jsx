import React from "react";
import Board from "./board";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Form from "./form";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CommentIcon from "@mui/icons-material/Comment";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AddIcon from "@mui/icons-material/Add";

const Body = () => {
  return (
    <div className="grid gap-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-blue-800 text-2xl font-bold">
          Technical Project Managment
        </h1>

        <button className="px-4 py-2 bg-blue-800 border text-white rounded-2xl">
          Submit Task
        </button>
      </div>
      <div className="p-5 rounded bg-gray-200">
        <h1 className="font-bold text-xl mb-5">
          Explore the world of managment
        </h1>
        <p className="text-gray-700">
          As a project manager, you play an important role in the project
          manager, you play an important role in the project manager, you play
          an important role in the project manager, you play an important role
          in the project manager, you play an important role in the
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <Board></Board>
        <Board
          title="Threadbuild"
          icon={<InfoIcon color="white" />}
          header="Watch the video and threadbuild, and jot out key threads while watching the video"
        >
          <div>
            <div className="flex p-2 bg-gray-100 items-center">
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
                  <LiveHelpIcon color="black" />
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
              <buttton className="rounded-xl bg-blue-800 flex justify-between py-3 px-4 my-2 text-white w-fit">
                <AddIcon />
                <p>Sub-thread</p>
              </buttton>
              <Form label="Summary for Thread A" />
            </div>
          </div>
        </Board>
      </div>
    </div>
  );
};

export default Body;
