import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { mintGOL, getGOLPrice } from "../../blockchain/gol.js";
import { setTotalMinted } from "../../blockchain/actions.js";
import { DEFAULT_ADDR } from "../../blockchain/constant.js";
import BigNumber from "bignumber.js";
import { ToastContainer } from "react-toastify";

class BuyModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0,
      referral: DEFAULT_ADDR,
      n: 1,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
  };
  componentWillReceiveProps(p) {
    if (p.interface) {
      this.setState({
        price: this.getPrice(p.totalMinted, this.state.referral),
      });
    }
  }
  getPrice(totalMinted, referral) {
    let decimal = new BigNumber("10").pow(18);
    return getGOLPrice(totalMinted, referral).dividedBy(decimal).toFixed(2);
  }
  componentDidMount() {
    const ref = queryString.parse(window.location.search);
    let referral = typeof ref.referral == "undefined" ? "" : ref.referral;
    this.setState({ referral });
  }
  componentDidUpdate() {
    setTotalMinted(this.props.interface, this.props.dispatch);
  }
  async buyToken() {
    let tm = await setTotalMinted(this.props.interface, this.props.dispatch);
    let referral =
      this.state.referral === DEFAULT_ADDR || !this.state.referral
        ? DEFAULT_ADDR
        : this.state.referral;
    mintGOL(this.props, this.state.n, tm, referral);
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
                  {console.log(this.state.price * this.state.n)}
                  <form onSubmit={this.onSubmit}>
                    <div className="mb-3 pt-0">
                      <span className="ext-sm text-gray-600">Total Price</span>
                      <input
                        type="text"
                        placeholder="Current Price"
                        className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                        value={this.state.price * this.state.n}
                        disabled
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <span className="ext-sm text-gray-600">Referral</span>
                      <input
                        type="text"
                        placeholder="Referral Address"
                        className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                        value={this.state.referral}
                        onChange={(e) => {
                          if (
                            e.target.value.length !== 42 &&
                            e.target.value.length !== 0
                          )
                            return;
                          this.setState({
                            referral: e.target.value,
                            price: this.getPrice(
                              this.props.totalMinted,
                              e.target.value
                            ),
                          });
                        }}
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <span className="ext-sm text-gray-600">
                        No of MysticGol
                      </span>
                      <input
                        type="number"
                        placeholder="Total NFTs"
                        className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                        min="1"
                        max="10"
                        value={this.state.n}
                        onChange={(e) => {
                          let n = e.target.value;
                          if (e.target.value > 10) {
                            n = 10;
                          }
                          this.setState({ n });
                        }}
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
        <ToastContainer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    interface: state.interface,
    walletAddress: state.walletAddress,
    totalMinted: state.totalMinted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyModal);
