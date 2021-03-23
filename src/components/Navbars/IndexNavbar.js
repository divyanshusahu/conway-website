import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Interface from "../../blockchain/interface";
import { getWalletAddress, setTotalMinted } from "../../blockchain/actions.js";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
    };
  }
  setNavBarOpen() {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }
  async componentDidMount() {
    if (typeof window.ethereum == "undefined") {
      toast.error("Metamask not installed", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }

    if (!this.props.interface) {
      let interfaceObj = new Interface();
      this.props.dispatch({ type: "INTERFACE", payload: interfaceObj });

      interfaceObj.isConnectedToProperNetwork().then((v) => {
        if (!v) {
          toast.error("Connected to wrong network, use BSC", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
          });
          return;
        }
      });
      getWalletAddress(this.props.dispatch);
      // setTotalMinted(interfaceObj, this.props.dispatch)
    } else {
      const s = this.props.interface;
      console.log(s);
      this.setState(s);
    }
  }
  render() {
    return (
      <>
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/"
                className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              >
                Msytic Game of Life
              </Link>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={this.setNavBarOpen.bind(this)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
                (this.state.navbarOpen ? " block" : " hidden")
              }
              id="example-navbar-warning"
            >
              {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
                <li className="flex items-center">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href={`https://twitter.com/${TWITTER_HANDLE}`}
                    target="_blank"
                  >
                    <i className="text-gray-500 fab fa-twitter text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Tweet</span>
                  </a>
                </li>
              </ul> */}
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="flex items-center">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="/#/faq"
                  >
                    FAQ
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="/#/marketplace"
                  >
                    Marketplace
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="/#/profile"
                  >
                    {/* <i className="text-gray-500 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                    My Collection
                  </a>
                </li>
                <li className="flex items-center">
                  <button
                    disabled={this.props.walletAddress}
                    onClick={() => getWalletAddress(this.props.dispatch)}
                    className={`bg-${
                      this.props.walletAddress ? "green-500" : "gray-800"
                    } text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150`}
                    type="button"
                  >
                    {this.props.walletAddress
                      ? this.props.walletAddress.substring(0, 8) + "..."
                      : "Connect"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    walletAddress: state.walletAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
