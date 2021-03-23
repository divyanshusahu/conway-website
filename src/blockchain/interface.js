import Web3 from "web3";
import { GOL_ABI } from "../blockchain/abi.js";
import { GOL_ADDRESS, CHAIN_ID } from "../blockchain/constant.js";

class Interface {
  constructor() {
    this.web3 = new Web3(window.ethereum);
    this.gol = new this.web3.eth.Contract(GOL_ABI, GOL_ADDRESS);
  }

  async isConnectedToProperNetwork() {
    let chainId = await this.web3.eth.getChainId();
    return chainId === CHAIN_ID;
  }
}

export default Interface;
