import React from "react";

export const GoalsBanner = () => {
  return (
    <div className="fixed flex items-center gap-x-10 p-2 bg-green-300 border border-black">
      <img
        src="/goals.gif" 
        alt="Header Image"
        className="w-full h-auto" 
      />
    </div>
  );
};