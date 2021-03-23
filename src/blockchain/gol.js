import BigNumber from "bignumber.js";
import { DEFAULT_ADDR } from "./constant.js";
import { toast } from "react-toastify";
import { check } from "prettier";

export async function getTotalMinted(contract) {
  return await contract.methods["totalSupply"]().call();
}
let decimal = new BigNumber(10).pow(18);

export function getGOLPrice(ind, referral) {
  let price = decimal;
  if (referral && referral !== DEFAULT_ADDR) {
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
  let promiseTx = state.interface.gol.methods["mintNFT"](no, referral).send({
    from: state.walletAddress,
    value: totalPrice,
  });
  checkTx(promiseTx);
}
function checkWalletAddress(state) {
  if (state.walletAddress) {
    return true;
  }
  toast.dismiss();
  toast.success("Wallet not connected.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
  });
  return false;
}
export function enterBid(state, tokenId, amount) {
  if (!checkWalletAddress(state)) return;

  let amountInwei = new BigNumber(amount).multipliedBy(decimal);
  let promiseTx = state.interface.gol.methods["enterBidForGol"](tokenId).send({
    from: state.walletAddress,
    value: amountInwei,
  });
  checkTx(promiseTx);
}
export function acceptBidForGol(state, tokenId, amount) {
  if (!checkWalletAddress(state)) return;

  let amountInWei = new BigNumber(amount).multipliedBy(decimal);
  let promiseTx = state.interface.gol.methods["acceptBidForGol"](
    tokenId,
    amountInWei
  ).send({
    from: state.walletAddress,
  });
  checkTx(promiseTx);
}
export function withdrawBidForGol(state, tokenId) {
  if (!checkWalletAddress(state)) return;

  let promiseTx = state.interface.gol.methods["withdrawBidForGol"](
    tokenId
  ).send({
    from: state.walletAddress,
  });
  checkTx(promiseTx);
}
export function buyGol(state, tokenId, amount) {
  if (!checkWalletAddress(state)) return;

  let amountInWei = new BigNumber(amount).multipliedBy(decimal);
  let promiseTx = state.interface.gol.methods["buyGol"](tokenId).send({
    from: state.walletAddress,
    value: amountInWei,
  });
  checkTx(promiseTx);
}
export function offerGolForSale(state, tokenId, amount) {
  if (!checkWalletAddress(state)) return;

  let amountInWei = new BigNumber(amount).multipliedBy(decimal);
  let promiseTx = state.interface.gol.methods["offerGolForSale"](
    tokenId,
    amountInWei,
    DEFAULT_ADDR
  ).send({
    from: state.walletAddress,
  });
  checkTx(promiseTx);
}

function checkTx(promiseTx) {
  promiseTx
    .on("transactionHash", function (hash) {
      //alert(`Pushed transaction ${hash}`);
      toast.info(`Pushed transaction ${hash}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        closeButton: true,
        style: { wordBreak: "break-word" },
        draggable: false,
      });
    })
    .on("confirmation", function (confirmationNumber, receipt) {
      if (confirmationNumber === 4) {
        //alert("successfully minted, Refresh plz.");
        toast.dismiss();
        toast.success("Successfully minted. Visit My Collection Page.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    })
    .on("error", function (error, receipt) {
      // console.log(error.message)
      toast.dismiss();
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    });
}
