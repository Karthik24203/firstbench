"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Scale } from "lucide-react";

function ScaleGraph() {
  const [percentage, setPercentage] = useState(50); // Default percentage value

  const handleInputChange = (e) => {
    const value = Math.min(100, Math.max(0, e.target.value)); // Ensure value is between 0 and 100
    setPercentage(value);
  };

  return (
    <div className="relative bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="flex items-center gap-2 text-lg font-medium mb-4">
        <span role="img" aria-label="icon">
          🕒
        </span>
        Time Taken
      </h2>

      {/* Scale Image */}
      <div className="relative">
        <Image
          src={"/scale.png"}
          alt="Scale"
          width={300}
          height={100}
          className="relative"
        />

        {/* Dynamic Bar */}
        <div className="absolute top-[30%] left-[10%] h-4 w-[80%]">
          <div
            className="h-full bg-green-500 rounded-l-md"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum.
      </p>

      {/* Input for Percentage */}
      <div className="mt-6">
        <label
          htmlFor="percentage"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Set Percentage:
        </label>
        <input
          type="number"
          id="percentage"
          value={percentage}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter percentage (0-100)"
        />
      </div>
    </div>
  );
}

export default ScaleGraph;
