/*eslint-disable*/
import { getWalletAddress } from "blockchain/actions";
import { TWITTER_HANDLE } from "blockchain/constant";
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
    }
  }
  setNavBarOpen() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
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
                Game of Life
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
              <ul className="flex flex-col lg:flex-row list-none mr-auto">
                <li className="flex items-center">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="/faq"
                  >
                    <i className="text-gray-500 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  FAQ
                </a>
                </li>
              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
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
                <li className="flex items-center">
                  <button disabled={this.props.walletAddress} onClick={() => getWalletAddress(this.props.dispatch)}
                    className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    {this.props.walletAddress ? this.props.walletAddress.substring(0, 8) + "..." : "Connect"}
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
