import React from "react";

const Form = ({ label }) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-2xl h-32 overflow-hidden shadow-xl border border-gray-200">
      <label className="m-2">{label}</label>
      <textarea
        className="flex-1 rounded-2xl p-3 shadow-xl border border-gray-200 resize-none"
        placeholder="Enter Text Here"
      ></textarea>
    </div>
  );
};

export default Form;
