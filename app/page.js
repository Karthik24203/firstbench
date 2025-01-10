"use client";
import Sidebar from "./_components/Sidebar";
import TopCard from "./_components/TopCard";
import MidCard from "./_components/MidCard";
import Graph from "./_components/Graph";
import Header from "./_components/Header";

export default function Home() {
  return (
    <>
    <Header/>
      <div className="bg-gray-50 flex justify-center w-full">
        <Sidebar />
        <div className="py-1 px-2 flex flex-col items-center justify-center gap-3 pb-0">
          <TopCard />
          <MidCard />
          <Graph />
        </div>
      </div>
    </>
  );
}
