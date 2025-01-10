import { ClockAlert, MoveUp, MoveUpRight, Sparkles } from "lucide-react";
import React from "react";

function MidCard() {
  const topic = [
    { name: "Geography", color: "bg-cyan-500" },
    { name: "Politics", color: "bg-yellow-300" },
    { name: "Current Affairs", color: "bg-cyan-500" },
    { name: "General Studies", color: "bg-red-500" },
    { name: "Mathematics", color: "bg-cyan-500" },
    { name: "Social Studies", color: "bg-gray-300" },
    { name: "English Literature", color: "bg-red-500" },
    { name: "Indian History", color: "bg-yellow-300" },
    { name: "Economics", color: "bg-cyan-500" },
  ];

  const approach = [
    { p: 25, d: "Facts" },
    { p: 32, d: "Analytics" },
    { p: 19, d: "Elimination" },
    { p: 24, d: "Guess" },
  ];
  return (
    <div className="mt-2 flex gap-2">
      <div className="w-56 bg-white border p-3 rounded-md shadow-md">
        <p className="flex items-center text-gray-400 text-sm mb-2">
          <MoveUpRight className="mr-2" />
          Improvements
        </p>
        <p className="font-medium text-gray-700 mb-3">Select Understanding</p>
        <div className="flex flex-wrap gap-2">
          {topic.map((item, index) => (
            <p
              key={index}
              className={`text-[8px] px-3 py-1 rounded-full text-white ${item.color}`}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="w-56 bg-white border p-3 rounded-md shadow-md">
        <p className="flex items-center text-gray-400 text-sm mb-2">
          <ClockAlert className=" mr-2" />
          Response Time
        </p>
        <p className=" text-white bg-violet-700 text-xs w-fit px-1">
          Std Time - 2min
        </p>
        <div
          className=" flex justify-evenly items-center h-12 bg-gray-200 
      border-dotted border-2 border-violet-500 mt-4"
        >
          <p className=" text-cyan-500  text-xl">
            60% <span className=" text-gray-500 text-sm">Ans Took</span>
          </p>
          <p className="flex text-violet-700">
            <MoveUp className=" text-red-600" /> 2min
          </p>
        </div>

        <p className=" py-5 text-center border-gray-400 mt-3 text-xl border-t-2">
          You are <span className=" text-red-600">slow!</span>
        </p>
      </div>
      <div className="w-56 bg-white border p-3 rounded-md shadow-md">
        <p className="flex items-center text-gray-400 text-sm mb-2">
          <MoveUpRight className="mr-2" />
          Approach Data
        </p>
        <div className="flex flex-col gap-1">
          {approach.map((item, index) => (
            <div
              className=" flex items-center text-sm border  border-violet-500 py-1"
              key={index}
            >
              {" "}
              <p className=" text-violet-700 p-1 rounded-sm mx-1 h-fit bg-violet-200 w-fit">
                {item.p}%
              </p>
              <p>
                Bases on <span className="text-violet-800">{item.d}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-56 bg-white border p-3 rounded-md shadow-md">
        <p className="flex items-center text-gray-400 text-sm mb-2">
          <Sparkles className="mr-2" />
          Suggestions
        </p>
        <div className="flex gap-1 justify-evenly mt-3">
          <div className="  w-fit h-full flex flex-col justify-center gap-5 items-center">
            <p className=" bg-violet-700 text-white text-xs w-full">Q. 1-12</p>
            <p className="rounded-sm py-3 font-semibold  bg-violet-300 px-1 border-dashed border-2 border-violet-500">
              40<span className=" text-xs">sec</span>
            </p>
            <p className=" text-sm font-semibold text-cyan-500">Easy</p>
          </div>{" "}
          <div className="  w-fit h-full flex flex-col justify-center gap-5  items-center">
            <p className=" bg-violet-700 text-white text-xs w-full">Q. 12-32</p>
            <p className="rounded-sm py-3 font-semibold  bg-violet-300 px-1 border-dashed border-2 border-violet-500">
              1.5<span className=" text-xs">min</span>
            </p>
            <p className=" text-sm font-semibold text-yellow-500">Medium</p>
          </div>
          <div className="  w-fit h-full flex flex-col justify-center gap-5  items-center">
            <p className=" bg-violet-700 text-white text-xs w-full">Q. 32-40</p>
            <p className="rounded-sm py-3 font-semibold bg-violet-300 px-1 border-dashed border-2 border-violet-500">
              30<span className=" text-xs">min</span>
            </p>
            <p className=" text-sm font-semibold text-red-500">Hard</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default MidCard;
