import React from "react";

import { ToastContainer, toast } from "react-toastify";

export default function ShareModal(props) {
  if (!props.open) return null;
  let shareURL = "";
  if (typeof window !== "undefined") {
    shareURL = `${window.location.host}/?referral=${props.wallet}`;
  }

  const copyURL = () => {
    navigator.clipboard.writeText(shareURL).then(() => {
      toast.success("Copied to clipboard", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    });
  };

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
                  <div class="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="text"
                      class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                      defaultValue={shareURL}
                      disabled={true}
                    />
                    <span
                      class="cursor-pointer z-10 h-full leading-snug font-normal absolute text-center text-gray-500 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1"
                      onClick={copyURL}
                    >
                      <i class="fas fa-copy"></i>
                    </span>
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
      <ToastContainer />
    </>
  );
}
