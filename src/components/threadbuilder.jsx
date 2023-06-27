import React from "react";
import { useState, useEffect } from "react";
import data from "../../dt.json";

const threadbuilder = () => {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        setThreads(data);
      });
  }, []);
  return (
    <div>
      {threads.map((thread) => (
        <div key={thread.id}>
          <h1>{thread.title}</h1>
          <p>{thread.body}</p>

        </div>
      ))} 
    </div>
  );
  return (
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
  );
};
export default threadbuilder;
