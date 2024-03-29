import React, { Component } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import Conway from "components/Conway.js";
import { connect } from "react-redux";
import { getTokenDetails } from "../components/randomHashIndex";

class Profile extends Component {
  componentDidUpdate() {}
  async componentWillReceiveProps(p) {
    console.log(p);
    if (p.interface && p.walletAddress) {
      let tokens = await p.interface.gol.methods["getOwnerTokens"](
        p.walletAddress
      ).call();
      if (p.userTokens.length === tokens.length) {
        let matched = tokens.reduce((matching, token, tokenIndex) => {
          return matching && token === p.userTokens[tokenIndex];
        }, true);
        if (matched) return;
      }
      p.dispatch({ type: "USERTOKENS", payload: tokens });
    }
  }

  render() {
    return (
      <>
        <IndexNavbar />
        {this.props.userTokens.length === 0 ? (
          <div className="flex w-full h-600-px relative justify-center items-center ">
            <div className="font-semibold text-2xl text-gray-700">
              No mystic Game of Life tokens to show. Buy some{" "}
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
              Mystic Game of life owned: {this.props.userTokens.length}
              <div
                className="flex flex-wrap"
                style={{ justifyContent: "space-around" }}
              >
                {this.props.userTokens.map((tokenId) => {
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
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/* {this.props.userTokens.length == 0 ? <Footer /> : ''} */}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  //let a = [];
  // for (let i = 0; i < 618; i++) {
  //   a.push(i);
  // }
  return {
    interface: state.interface,
    walletAddress: state.walletAddress,
    totalMinted: state.totalMinted,
    //userTokens: a,
    userTokens: state.userTokens,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
