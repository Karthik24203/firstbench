import { SquareChevronDown } from "lucide-react";
import React from "react";

function TopCard() {
  return (
    <div className=" flex gap-4">
      <div className=" w-72 h-[190px] border p-1 bg-white ">
        <p className=" flex text-gray-400">
          <SquareChevronDown /> Compare Accuracy
        </p>
      </div>
      <div className=" w-72 h-[190px] border p-1 bg-white ">
        <p className=" flex text-gray-400">
          <SquareChevronDown /> Compare Accuracy
        </p>
      </div>
      <div className=" w-72 h-[190px] border p-1 bg-white ">
        <p className=" flex text-gray-400">
          <SquareChevronDown /> Compare Accuracy
        </p>
      </div>
    </div>
  );
}

export default TopCard;
