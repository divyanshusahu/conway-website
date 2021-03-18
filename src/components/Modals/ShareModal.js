import React from "react";

export default function ShareModal(props) {
  if (!props.open) return null;
  let shareURL = "";
  if (typeof window !== "undefined") {
    shareURL = `${window.location.host}/?referral=${props.wallet}`;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-xl font-semibold">Share</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.close()}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {props.wallet ? (
                <>
                  <p className="text-sm text-gray-600 mb-4">
                    Copy this URL and share it with your friends.
                  </p>
                  <div className="mb-3 pt-0">
                    <input
                      type="text"
                      className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                      defaultValue={shareURL}
                    />
                  </div>
                </>
              ) : (
                  <p className="text-sm text-gray-600">
                    Please connect your wallet
                  </p>
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
