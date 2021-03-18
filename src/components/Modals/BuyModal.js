import React, { Component } from "react";
import { connect } from 'react-redux';
import queryString from "query-string";
import { mintGOL } from "../../blockchain/gol.js";

class BuyModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0,
      referral: "",
      n: 1,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
  };

  componentDidMount() {
    const referral = queryString.parse(window.location.search);
    this.setState({ referral: referral.referral });
  }
  async buyToken() {
    let ref = this.state.referral == "" || !this.state.referral ?
      "0x0000000000000000000000000000000000000000" : this.state.referral;
    await mintGOL(this.props, this.state.n, ref);
  }
  render() {
    if (!this.props.open) return null;

    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-xl font-semibold">Buy</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => this.props.close()}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              {this.props.walletAddress ? (
                <div className="relative p-6 flex-auto">
                  <p className="text-sm text-gray-600 mb-4">
                    You can buy a total of 10 NFTs at a time.
                  </p>
                  <form onSubmit={this.onSubmit}>
                    <div className="mb-3 pt-0">
                      <input
                        type="text"
                        placeholder="Current Price"
                        className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                        defaultValue={"0.5 BNB"}
                        disabled
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <input
                        type="text"
                        placeholder="Referral Address"
                        className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                        value={this.state.referral}
                        onChange={(e) =>
                          this.setState({ referral: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <input
                        type="number"
                        placeholder="Total NFTs"
                        className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                        min="1"
                        max="10"
                        value={this.state.n}
                        onChange={(e) => this.setState({ n: e.target.value })}
                      />
                    </div>
                    <button
                      className="bg-green-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="submit"
                      onClick={this.buyToken.bind(this)}
                    >
                      Buy
                    </button>
                  </form>
                </div>
              ) : (
                  <p className="relative p-6 flex-auto text-sm text-gray-800">
                    Please connect your wallet
                  </p>
                )}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    interface: state.interface,
    walletAddress: state.walletAddress
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyModal);
