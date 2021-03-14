import React from "react";
import Steps from "rc-steps";

export default function BuyProgress(props) {

  return (
    <>
      {/*<div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{width: `${props.width}%`}}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"
          ></div>
        </div>
        time lagega, custom css
  </div>*/}
    <Steps current={1}>
      <Steps.Step title="125" />
      <Steps.Step title="125" />
      <Steps.Step title="125" />
      <Steps.Step title="125" />
      <Steps.Step title="125" />
      <Steps.Step title="125" />
      <Steps.Step title="125" />
    </Steps>
    </>
  );
}
