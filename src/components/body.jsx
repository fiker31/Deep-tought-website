import React from "react";
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
import { useState, useEffect } from "react";

const Body = () => {
  useEffect(() => {
    async function fetchProjectData() {
      try {
        const response = await fetch(
          "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json"
        );
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProjectData();
  }, []);
  const [projectData, setProjectData] = useState(null);
  if (!projectData) {
    return <div>Loading...</div>;
  }
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
          As a project manager, you play an important reole in leading a project
          through initiation, planning, execution, monitoring, controlling and
          completion. How? Do you want to manage each and every step of your
          life?
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <Board
          title="Technical Project Managment"
          icon={<InfoIcon color="white" />}
          header="Story of Alignment Scope of Agility Specific Accountable Staggering Approach"
        >
          <div>
            <img src={youtube} alt="Deeptought channel" />
          </div>
        </Board>
        <Board
          title="Threadbuild"
          icon={<InfoIcon color="white" />}
          header="Watch the video and threadbuild, and jot out key threads while watching the video"
        >
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
              <buttton className="rounded-xl bg-blue-800 flex justify-between py-3 px-4 my-2 text-white w-fit">
                <AddIcon />
                <p>Sub-thread</p>
              </buttton>
              <Form label="Summary for Thread A" />
            </div>
          </div>
        </Board>
        <Board
          title="Structure Your Pointers"
          icon={<InfoIcon color="white" />}
          header="Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world "
        >
          <div className="p-5">
            <div className="py-3 font-semibold text-lg">Title</div>
            <input
              className="rounded-xl shadow-gray-300 shadow-lg w-full p-3"
              type="text"
            />

            <div className="mt-10 mb-3 font-semibold text-lg">Content</div>

            <div className="py-2 shadow-gray-300 shadow-lg">
              <div class="box-border w-full p-4 shadow-gray-300 shadow-lg rounded-t-lg">
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
        </Board>
        <Board
          title="4SA Method"
          icon={<InfoIcon color="white" />}
          header="To explore more read more"
        >
          <div className="px-5">
            <div class=" bg-gray-100 w-full px-5 py-3 flex items-center">
              <KeyboardArrowUpIcon color="black" />
              <h3 className="ml-3 text-lg font-semibold">Introduction</h3>
            </div>
            <div className="px-2 py-5">
              The 4SA Method , How to bring a idea into progress ?
            </div>
            <div className="py-5 text-gray-400 font-semibold text-right">
              See More
            </div>
            <div class=" bg-white w-full px-5 py-3 items-center border-2 flex relative">
              <KeyboardArrowUpIcon color="black" />
              <h3 className="ml-3 text-lg font-semibold">Thread A</h3>
            </div>
            <div className="px-2 py-5">
              How are you going to develop your stratergy ? Which method are you
              going to use to develop a stratergy ? What if the project is
              lengthy?
            </div>
            <div className="py-5 text-gray-400 font-semibold text-right">
              See More
            </div>
            <div class=" bg-white w-full px-5 py-3 items-center border-2 flex relative">
              <h3 className="ml-3 text-lg font-semibold">Example 1</h3>
            </div>
            <div className="px-2 py-5">
              You have a concept , How will you put into progress?
            </div>
          </div>
        </Board>
      </div>
      <div>
        <h2>{projectData.title}</h2>
        <p>{projectData.short_description}</p>
        <img src={projectData.project_image} alt={projectData.title} />
        <ul>
          {projectData.learning_outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Body;
//x:581.8209 px w:122.6368 px y:244.053 px h:314.2324 px
