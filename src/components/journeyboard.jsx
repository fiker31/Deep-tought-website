import React, { useEffect, useRef, useState } from "react";
import Board from "./board";
import data from "../../dt.json";

const Journeyboard = () => {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef();

  const handleClickOutside = (e) => {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      setShowContent(false);
    }
  };

  useEffect(() => {
    if (showContent) {
      setTimeout(() => {
        window.addEventListener("click", handleClickOutside);
      }, 1000);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showContent]);
  return (
    <div className="jorney_board absolute top-0 left-0 z-10">
      <Board>
        {showContent ? (
          <ul className="list-disc mx-10" ref={contentRef}>
            {data.tasks.map((task) => (
              <div key={task.task_id}>
                <li className="pl-2 my-5 font-bold text-md">
                  {task.task_title}
                </li>
                <div className="ml-2">
                  {task.assets.map((asset) => (
                    <li key={asset.asset_id}>{asset.asset_title}</li>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <div className="flex justify-center w-full p-4">
            <button
              onClick={() => setShowContent(true)}
              className="border border-blue-500 rounded-3xl px-5 py-2 bg-transparent hover:bg-purple-500 hover:text-white transition-colors text-5xl text-blue-500"
            >
              1
            </button>
          </div>
        )}
      </Board>
    </div>
  );
};

export default Journeyboard;
