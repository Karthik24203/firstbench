import Image from "next/image";
import React from "react";
import { BookCheck, CircleAlert, FileInput } from "lucide-react";

function Sidebar() {
  return (
    <div
      className=" flex flex-col justify-center items-center p-8 w-[380px] h-screen
     bg-violet-50"
    >
      <Image src={`/result.jpg`} alt="" width={100} height={300} className=" mr-2"/>
      <h2 className=" text-purple-700 font-semibold text-xl">Your Result</h2>
      <p className=" text-gray-500 text-sm">
        All your details & insights in one place
      </p>
      <div className=" mt-3">
        <div className=" bg-white p-5 pb-0 rounded-md border">
          <div className=" flex bg-violet-50 p-2 rounded-md w-full">
            <div className=" flex w-full">
              <div
                className=" flex  gap-3 justify-center items-center 
           border-gray-300 border-r-2 pr-7"
              >
                <div className=" w-fit bg-violet-200  flex items-center h-fit p-2 ">
                  <BookCheck className="" />
                </div>
                <div>
                  <p
                    className=" text-[11px] items-center bg-violet-500
                     text-white px-2  rounded-full"
                  >
                    YOU'VE PASSED
                  </p>
                  <p className=" text-gray-400 text-ls">
                    <span className=" text-black font-bold text-xl">136</span>
                    /240
                  </p>
                </div>
              </div>
            </div>
            <div className=" ml-1 flex flex-col">
              <div
                className=" rounded-sm py-1 px-3 w-fit self-center
               bg-green-500 text-white text-sm"
              >
                76%
              </div>
              <p className=" text-[12px] text-green-500">ACCURACY</p>
            </div>
          </div>

          <div className="flex bg-violet-50 mt-2 p-2 flex-col">
            <div className=" w-full flex gap-2 border-b-2 pb-2">
              <Image
                src={`/newt.jpeg`}
                alt=""
                width={50}
                height={50}
                className="h-12 object-cover object-top"
              />
              <div>
                <p className=" text-violet-600 text-sm">Top Score</p>
                <p className=" text-gray-400 text-s">
                  <span className=" text-black font-bold text-xl">230</span>/240
                </p>
              </div>
            </div>
            <div className=" flex justify-between text-[12px] mt-1">
              <p>
                By <span className=" font-bold"> Parth Akotkar</span>
              </p>
              <p className=" bg-green-500 px-1 rounded-full text-white">
                92% ACCURACY
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-evenly h-[120px]">
            <div>
              <h3 className=" font-bold text-md">Imporove your Marks</h3>
              <p className=" text-gray-500 text-xs">
                Improve your score by practicing more.
              </p>
            </div>
            <button
              className=" text-s self-center bg-violet-600 text-white px-20 
             rounded-md py-1"
            >
              Practice more
            </button>
          </div>
        </div>

        <div
          className=" mt-4 bg-white py-2 h-52
         px-5 rounded-md border flex flex-col justify-between"
        >
          <div className=" flex flex-col">
            <h3 className=" font-bold text-lg">Revisit Paper</h3>
            <p className=" text-gray-500 text-sm">
              Challenge your friends by simply sharing a link to this test
            </p>
          </div>
          <button
            className=" self-center flex p-1 text-s items-center 
            gap-2 bg-violet-600 text-white px-20 
             rounded-md py-1"
          >
            <FileInput size={17} />
            Visit
          </button>
          <p className=" text-gray-400 flex gap-2 text-[12px]">
            <CircleAlert /> Instructions for how to upload your handwritten
            material in given
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
