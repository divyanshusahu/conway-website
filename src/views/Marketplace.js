import React, { Component } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import Conway from "components/Conway.js";
// import Operator from "./Operator.js";
import { connect } from "react-redux";
import { getTokenDetails } from "../components/randomHashIndex";
import { toast } from "react-toastify";
import { setTotalMinted } from "../blockchain/actions.js";

class Marketplace extends Component {
  componentDidMount() {
    toast.warning("Trading is disabled, only showcasing possible.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
    toast.dismiss();
  }
  componentWillReceiveProps(props) {
    if (props.interface) setTotalMinted(props.interface, props.dispatch);
  }
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
  }

  render() {
    return (
      <>
        <IndexNavbar />
        {this.props.tokens.length === 0 ? (
          <div className="flex w-full h-600-px relative justify-center items-center ">
            <div className="font-semibold text-2xl text-gray-700">
              No mystic Game of Life minted yet. Be the first to mint{" "}
              <a className="text-blue-500 hover:underline" href="/">
                here
              </a>
              .
            </div>
          </div>
        ) : (
          <div className="px-6  mx-auto">
            {/* <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg" style={{ marginTop: '6rem' }}> */}
            <div className="px-6 py-24">
              Number of minted Mystic GOL: {this.props.totalMinted}
              {console.log(this.props.totalMinted)}
              <div
                className="flex flex-wrap"
                style={{ justifyContent: "space-around" }}
              >
                {this.props.tokens.map((_, tokenId) => {
                  let details = getTokenDetails(tokenId);
                  return (
                    <Conway
                      gridSize={details.gridSize}
                      color={details.color}
                      xyNo={details.xyNo}
                      speed={details.speed}
                      key={tokenId}
                      name={details.name}
                      pattern={details.pattern}
                      id={`ts${tokenId}`}
                      confined={details.confined}
                    />
                    //   <Operator details={details} key={tokenId}/>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let a = [];
  //   for (let i = 0; i < 1; i++) {
  for (let i = 0; i < state.totalMinted; i++) {
    a.push(i);
  }
  return {
    interface: state.interface,
    walletAddress: state.walletAddress,
    totalMinted: state.totalMinted,
    tokens: a,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
