import React, { Component } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import Conway from 'components/Conway.js'
import { connect } from "react-redux";


class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  async componentWillReceiveProps(p) {
    if (p.interface && p.walletAddress) {
      let tokens = await p.interface.gol.methods["getOwnerTokens"](p.walletAddress).call();
      if (p.userTokens.length == tokens.length) {
        let matched = tokens.reduce((matching, token, tokenIndex) => { return matching && (token == p.userTokens[tokenIndex]) }, true)
        if (matched) return;
      }
      console.log("USERTOKENS")
      p.dispatch({ type: "USERTOKENS", payload: tokens });
    }
  }
  render() {
    return (
      <>
        <IndexNavbar />
        {/* <section className="relative block h-500-px"> */}
        {/* <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div> */}
        {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div> */}
        {/* </section> */}
        <section >
          <div className="px-6 mx-auto" style={{ backgroundSize: 'cover', backgroundImage: 'url("./bglife.png")', backgroundRepeat: 'repeat' }}>
            {/* <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg" style={{ marginTop: '6rem' }}> */}
            <div className="px-6" style={{ paddingTop: '6rem' }}>
              <div className="flex flex-wrap" style={{ justifyContent: 'space-around' }}>
                {this.props.userTokens.map((tokenId) =>
                  <Conway size="30x20" color={1} xyNo="60x40" speed="fast" key={tokenId} pattern="Blonker" id={`ts${tokenId}`} confined={true} />
                )}
                {/* <Conway size="30x20" color={1} speed="fast" pattern="Hive test tube baby" id="ts0" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="Blonker" id="ts1" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="Cousins" id="ts2" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="Frog II" id="ts3" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="Loading dock" id="ts4" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="Biting off more than they can chew" id="ts5" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="Jam" id="ts6" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="Double caterer" id="ts7" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="38P7.2" id="ts8" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="55P10" id="ts9" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="Biting off more than they can chew" id="tsas5" confined={true} />
                <Conway size="30x20" color={1} speed="fast" pattern="Jam" id="ts6asd" confined={true} /> */}
                {/* <Conway size="30x20" color={1} speed="fast" pattern="Double caterer" id="tasds7" confined={true} />
              <Conway size="30x20" color={1} speed="fast" pattern="38P7.2" id="tsasd8" confined={true} />
              <Conway size="30x20" color={1} speed="fast" pattern="55P10" id="tsasdasd9" confined={true} />
              <Conway size="30x20" color={1} speed="fast" pattern="Double caterer" id="asdtasds7" confined={true} />
              <Conway size="30x20" color={1} speed="fast" pattern="38P7.2" id="tsaasdsd8" confined={true} />
              <Conway size="30x20" color={1} speed="fast" pattern="55P10" id="tsassdfd9" confined={true} />
              <Conway size="30x20" color={1} speed="fast" pattern="Double caterer" id="tdsfasds7" confined={true} />
              <Conway size="30x20" color={1} speed="fast" pattern="38P7.2" id="tsdsfasd8" confined={true} />
              <Conway size="30x20" color={1} speed="fast" pattern="55P10" id="tsasdfsd9" confined={true} /> */}
              </div>

            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    interface: state.interface,
    walletAddress: state.walletAddress,
    totalMinted: state.totalMinted,
    userTokens: state.userTokens,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);