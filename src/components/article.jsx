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

const article = ({ data }) => {
  return data.asset_type == "input_asset" ? (
    <div className="p-5">
      <div className="py-3 font-semibold text-lg">Title</div>
      <input
        className="rounded-xl shadow-gray-300 shadow-lg w-full p-3"
        type="text"
      />

      <div className="mt-10 mb-3 font-semibold text-lg">Content</div>

      <div className="py-2 shadow-gray-300 shadow-lg">
        <div className="box-border w-full p-4 shadow-gray-300 shadow-lg rounded-t-lg">
          <nav className="w-full flex justify-between items-center navbar">
            <ul className="list-none sm:flex hidden justify-end items-center">
              <div className="text-sm text-gray-400/100 font-semibold">
                File
              </div>
              <div className=" relative mx-2 text-sm text-gray-400/100 font-semibold">
                Edit
              </div>
              <div className="relative mx-2 text-sm text-gray-400/100 font-semibold">
                View
              </div>
              <div className="relative mx-2 text-sm text-gray-400/100 font-semibold">
                Insert
              </div>
              <div className="relative mx-2 text-sm text-gray-400/100 font-semibold">
                Format
              </div>
              <div className="relative mx-2 text-sm text-gray-400/100 font-semibold">
                Tools
              </div>
              <div className="relative mx-2 text-sm text-gray-400/100 font-semibold">
                Table
              </div>
              <div className="text-sm text-gray-400/100 font-semibold">
                Help
              </div>
            </ul>
          </nav>
          <div className="flex pt-5 items-center">
            <TurnLeftIcon color="disabled" />
            <TurnRightIcon className="relative mx-2" color="disabled" />
            <OpenWithIcon className="relative mx-3" color="disabled" />
            <div className="py-0.5 pl-2 pr-10 mr-1 bg-gray-200 text-left text-gray-500">
              Paragraph
            </div>
            <MoreHorizIcon color="disabled" />
          </div>
        </div>

        <textarea className="h-40 rounded-b-lg w-full border-0 resize-none bg-transparent focus:outline-none p-5"></textarea>
      </div>
    </div>
  ) : (
    <iframe
      width="100%"
      height="600"
      src={data.asset_content}
      title={data.asset_title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
      allowFullScreen
      className="mb-2 -mt-4 overflow-x-hidden"
    ></iframe>
  );
};

export default article;
