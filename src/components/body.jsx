import Board from "./board";
import InfoIcon from "@mui/icons-material/Info";
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
import React, { useState, useEffect } from "react";
import data from "../../dt.json";
import Item from "./item";

const Body = () => {
  const [tasks, setTasks] = useState(data.tasks);

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
      {tasks.map((task) => (
        <>
          <div className="p-5 rounded bg-gray-200">
            <h1 key={task.task_id} className="font-bold text-xl mb-5">
              {task.task_title}
            </h1>

            <p className="text-gray-700">{task.task_description}</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {task.assets.map((asset) => (
              <Item data={asset} key={asset.asset_id} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Body;

/*

<h1 className="text-2xl font-bold mb-4">Tasks List</h1>
<ul>
  {tasks.map((task) => (
    <li key={task.task_id} className="mb-8">
      <h2 className="text-xl font-bold mb-2">{task.task_title}</h2>
      <p className="mb-4">{task.task_description}</p>
      <h3 className="text-lg font-bold mb-2">Assets</h3>
      <ul>
        {task.assets.map((asset) => (
          <li key={asset.asset_id} className="mb-4">
            <h4 className="text-md font-bold mb-2">
              {asset.asset_title}
            </h4>
            <p className="mb-2">{asset.asset_description}</p>
            {asset.asset_content_type === "video" && (
              <iframe
                width="560"
                height="315"
                src={asset.asset_content}
                title={asset.asset_title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mb-2"
              ></iframe>
            )}
            {asset.asset_content_type === "threadbuilder" && (
              <p className="mb-2">Display threadbuilder component here</p>
            )}
            {asset.asset_content_type === "article" && (
              <p className="mb-2">Display article input component here</p>
            )}
          </li>
        ))}
      </ul>
    </li>
  ))}
</ul>
*/
