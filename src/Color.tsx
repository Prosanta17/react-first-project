import React, { use, useState } from "react";

const Color = () => {
  const [color, setColor] = useState("red");
  return (
    <div
      className="h-screen w-screen absolute top-0 left-0 duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 flex justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded p-2">
          <button
            onClick={() => setColor("red")}
            className="text-white rounded-full px-5 py-2 cursor-pointer"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="text-white rounded-full px-5 py-2 cursor-pointer"
            style={{ backgroundColor: "green" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="text-white rounded-full px-5 py-2 cursor-pointer"
            style={{ backgroundColor: "blue" }}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
};

export default Color;
