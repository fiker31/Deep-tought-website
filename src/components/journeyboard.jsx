import React, { useEffect, useRef, useState } from "react";
import Board from "./board";

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
            <li className="pl-2 my-5 font-bold text-md">
              Explore the world of management
            </li>
            <div className="ml-2">
              <li>Technical Project Management</li>
              <li>Threadbuild</li>
              <li>Structure your pointers</li>
              <li>4SA Method</li>
            </div>
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
