import React from "react";
import Board from "./board";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Form from "./form";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CommentIcon from "@mui/icons-material/Comment";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AddIcon from "@mui/icons-material/Add";
import youtube from "../assets/youtube.png" ;
import TurnRightIcon from '@mui/icons-material/TurnRight';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OpenWithIcon from '@mui/icons-material/OpenWith';

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
        As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling 
        and completion. How? Do you want to manage each and every step of your life?
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
        <Board
          title="Structure Your Pointers"
          icon={<InfoIcon color="white" />}
          header="Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world "
        >
       <div className="px-5 py-7 font-semibold text-lg">
        Title
       </div>
       <div className="px-4 py-2 ">
               
             
       <textarea
        className="flex-1 rounded-xl shadow-grey shadow-2xl border border-gray-200 resize-none w-96 h-full"
       
      >
          
      </textarea>
      </div>
      <div className="px-5 py-7 font-semibold text-lg">
        Content
       </div>
      
       <div className="px-4 py-2">
               
             
       <div class="box-border h-48 w-96 p-4 border">
       
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
        <TurnLeftIcon color="disabled" />
        <TurnRightIcon className="relative mx-2" color="disabled" />
        <OpenWithIcon className="relative mx-3" color="disabled" />
        <MoreHorizIcon color="disabled" />


       </div>
      </div>
      
     
    
    
        </Board>
        <Board
         title="4SA Method"
         icon={<InfoIcon color="white" />}
         header="To explore more read more"
        >
    
    <div class=" bg-gray-100 w-full h-14 px-10 items-center flex mx-10 relative">
    
    <KeyboardArrowUpIcon color="black" />
              <h3 className="ml-16 text-lg">Introduction</h3>
    </div>
    <div className="px-14 py-5" > 
      The 4SA Method , How to bring a idea into progress ?
      </div>
      <div className="py-5 text-gray-400 font-semibold content-between"> 
      See More
      </div>


          
        </Board>
      </div>
    </div>
  );
};

export default Body;
