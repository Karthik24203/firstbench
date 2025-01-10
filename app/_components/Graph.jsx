import { Repeat2, Timer } from "lucide-react";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Graph() {
  return (
    <div className="flex gap-4 ">
      <div
        className="bg-white border-2 mt-2 w-fit p-4  py-0
      rounded-md"
      >
        <h2 className="flex items-center gap-1 text-s font-medium mb-4 text-gray-400">
          <Repeat2 />
          Compare Accuracy
        </h2>
        <div className="w-fit h-fit">
          <Bar
            data={{
              labels: ["1", "2", "3", "4", "5", "6"],
              datasets: [
                {
                  data: [85, 45, 30, 57, 52, 47, 60],
                  backgroundColor: ["#845EC2"], // Custom bar colors
                  barThickness: 10, // Makes bars leaner
                  borderRadius: {
                    topLeft: 10, // Rounded top-left corner
                    topRight: 10, // Rounded top-right corner
                  },
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false, // Hides the top label
                },
              },
              scales: {
                y: {
                  title: {
                    display: true,
                    text: "Accuracy", // Sets the y-axis label
                  },
                  ticks: {
                    callback: function (value) {
                      return `${value}%`; // Converts y-axis values to percentage format
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="w-fit py-1 px-10 rounded-md border-2 mt-2">
        <h2 className="flex gap-2 text-gray-500">
          <Timer /> Time Taken
        </h2>
        <div className="relative">
          {/* Adjust the image position with negative margins */}
          <Image
            src={"/scale.png"}
            alt=""
            width={300}
            height={100}
            className=""
          />
          {/* Absolute div positioned over the image */}
          <div
            className="absolute h-fit top-7  gap-2 flex-col inset-0 
          flex items-left justify-center"
          >
            <div
              className="h-2 bg-red-500 rounded-md"
              style={{ width: `190px` }}
            />
            <div
              className="h-2 bg-green-500 rounded-md"
              style={{ width: `90px` }}
            />
          </div>
          <p className="mt-1 text-xs w-72 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
        </div>
        <div className="relative">
          {/* Adjust the image position with negative margins */}
          <Image
            src={"/scale.png"}
            alt=""
            width={300}
            height={100}
            className=""
          />
          {/* Absolute div positioned over the image */}
          <div
            className="absolute top-8 h-fit  gap-2  inset-0 
          flex items-left justify-start"
          >
            <div
              className="h-2 bg-red-500 rounded-md"
              style={{ width: `190px` }}
            />
            <div
              className="h-2 bg-green-500 rounded-md"
              style={{ width: `90px` }}
            />
          </div>
          <p className="mt-1 text-xs w-72 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Graph;
