import React from "react";

export default function BuyProgress(props) {
  return (
    <>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: "30%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"
          ></div>
        </div>
      </div>
    </>
  );
}
