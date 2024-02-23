import React from "react";

export const TeamBanner = () => {
  return (
    <div className="flex items-center gap-x-10 p-2 bg-green-300 border border-black">
      <img
        src="/team.gif" 
        alt="Header Image"
        className="w-full h-auto" 
      />
    </div>
  );
};