import React from "react";
import BigNumber from "bignumber.js";
import { DEFAULT_ADDR } from "./constant.js";
import { toast } from "react-toastify";

export async function getTotalMinted(contract) {
  return await contract.methods["totalSupply"]().call();
}

export function getGOLPrice(ind, referral) {
  console.log("refera", referral);
  let price = new BigNumber(10).pow(18);
  if (referral && referral != DEFAULT_ADDR) {
    price = price.multipliedBy(925).dividedBy(1000);
  }
  if (ind < 125) {
    price = price.multipliedBy(6);
  } else if (ind < 225) {
    price = price.multipliedBy(12);
  } else if (ind < 300) {
    price = price.multipliedBy(18);
  } else if (ind < 350) {
    price = price.multipliedBy(25);
  } else if (ind < 375) {
    price = price.multipliedBy(35);
  } else if (ind < 385) {
    price = price.multipliedBy(50);
  } else {
    price = price.multipliedBy(100);
  }
  return price.dividedBy(10);
}

export function mintGOL(state, no, tm, referral) {
  console.log("adas", referral);
  let totalPrice = getGOLPrice(tm, referral).multipliedBy(no);
  state.interface.gol.methods["mintNFT"](no, referral)
    .send({
      from: state.walletAddress,
      value: totalPrice,
    })
    .on("transactionHash", function (hash) {
      //alert(`Pushed transaction ${hash}`);
      toast.info(`Pushed transaction ${hash}`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        closeButton: false,
        style: { wordBreak: "break-word" },
        draggable: false,
      });
    })
    .on("confirmation", function (confirmationNumber, receipt) {
      if (confirmationNumber === 4) {
        //alert("successfully minted, Refresh plz.");
        toast.dismiss();
        toast.success("Successfully minted. Visit My Collection Page.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    })
    .on("error", function (error, receipt) {
      //alert(error.message);
      toast.dismiss();
      toast.error("Transaction Failed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    });
}
