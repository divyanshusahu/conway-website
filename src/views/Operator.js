import React, { Component } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import Conway from "components/Conway.js";
import { connect } from "react-redux";
// import { getTokenDetails } from "../components/randomHashIndex";
// import { toast } from "react-toastify";
import {
  enterBid,
  acceptBidForGol,
  withdrawBidForGol,
  buyGol,
} from "../blockchain/gol.js";

class Operator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
  }
  bid(tokenId) {
    if (this.props.interface)
      enterBid(this.props, this.props.details.tokenId, this.state.amount);
  }

  render() {
    let details = this.props.details;
    return (
      <>
        <div>
          <Conway
            gridSize={details.gridSize}
            color={details.color}
            xyNo={details.xyNo}
            speed={details.speed}
            name={details.name}
            pattern={details.pattern}
            id={`ts${details.tokenId}`}
            confined={details.confined}
          />

          <input
            value={this.state.amount}
            onChange={(e) => {
              this.setState({ amount: e.target.value });
            }}
          />
          <button
            className=" cursor-pointer sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
            onClick={this.bid.bind(this)}
          >
            Bid
          </button>
          <button className=" cursor-pointer sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg">
            Accept
          </button>
          <button className=" cursor-pointer sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg">
            Buy
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    interface: state.interface,
    walletAddress: state.walletAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Operator);
