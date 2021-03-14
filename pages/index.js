import React, { Component } from "react";
import Link from "next/link";
import { Link as RSLink, Element } from "react-scroll";
import Web3 from 'web3';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import BuyProgress from "components/ProgressBar/BuyProgress.js";
import ShareModal from "components/Modals/ShareModal.js";
import BuyModal from "components/Modals/BuyModal.js";
import { GOL_ABI } from '../blockchain/abi.js';
import { CHAIN_ID, GOL_ADDRESS } from '../blockchain/constant.js';
import { getTotalSold, mintGOL } from '../blockchain/gol.js';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shareModalOpen: false,
      buyModalOpen: false,
      web3: null,
      gol: null,
      totalSold: 0,
      connected: false,
      wallet: null
    }
  }

  async componentWillReceiveProps(p) {
    if (this.state.web3 != null) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.setState({ connected: true, wallet: accounts[0] })
      console.log(this.state.wallet)
    } else {
      alert('Metamask is not installed')
      return
    }
  }
  componentWillUpdate(nextProps, nextState) {
  }
  async buyToken(no, referral = "0x0000000000000000000000000000000000000000") {
    console.log(this.state)
    await mintGOL(this.state, no, referral)
  }
  async componentDidMount() {
    console.log(window.ethereum)
    if (typeof window.ethereum == 'undefined') {
      alert('Metamask is not installed');
      return
    };
    let _web3 = new Web3(window.ethereum);
    console.log(await _web3.eth.getChainId())
    if (CHAIN_ID !== await _web3.eth.getChainId()) {
      alert('Connected to wrong network, use BSC')
      return
    }
    let s = {
      web3: _web3,
      gol: new _web3.eth.Contract(GOL_ABI, GOL_ADDRESS)
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    s.totalSold = await getTotalSold(s.gol)
    s.wallet = accounts[0];
    console.log(s)
    this.setState(s)
    console.log(_web3.currentProvider)
    // _web3.currentProvider.publicConfigStore.on('update', (data) => {
    //   console.log(data)
    // });
    window.ethereum.on('accountsChanged', function (accounts) {
      alert("account changed")
      this.setState({
        wallet: accounts[0],
        connected: true,
      })
    })
    // await this.buyToken(1)
  }
  closeModal() {
    this.setState({
      shareModalOpen: false,
      buyModalOpen: false
    })
  };
  render() {
    return (
      <>
        <IndexNavbar fixed address={this.state.wallet} />
        <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
          <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-4xl text-gray-700">
                  Conway Game - A beautiful set of NFTs based on Conway's Game of
                  life
              </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  <a
                    href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                    className="text-gray-700"
                    target="_blank"
                  >
                    The Game of Life
                </a>
                , also known simply as Life, is a cellular automaton devised by
                the British mathematician John Horton Conway in 1970. It is a
                zero-player game, meaning that its evolution is determined by
                its initial state, requiring no further input.
              </p>
                <div className="mt-12">
                  <RSLink to="BuySectionScroll" spy={true} smooth={true}>
                    <a
                      href="#"
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                    >
                      Buy
                  </a>
                  </RSLink>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
            src={require("assets/img/pattern_nextjs.png")}
            alt="..."
          />
        </section>

        <Element name="BuySectionScroll"></Element>
        <div className="mx-auto" style={{ marginBottom: "192px" }}>
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-16 px-12 z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
              </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Love Conway game of Life NFT?
            </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. You can also refer this to
                your friend. Both you and your friend will get 7.5% discount.
            </p>
              <div style={{ marginTop: "8px", marginBottom: "8px" }}>
                <BuyProgress totalSold={390} />
              </div>
              <div className="sm:block flex flex-col mt-10">
                <span
                  className="get-started cursor-pointer text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  onClick={(() => { this.setState({ shareModalOpen: true }) }).bind(this)}
                >
                  Share
              </span>
                <span
                  className="github-star cursor-pointer sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                  onClick={(() => { this.setState({ buyModalOpen: true }) }).bind(this)}
                >
                  <span>Buy</span>
                </span>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>

        <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
                className="text-gray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-gray-800 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Great for your NFTs collection
                  </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The universe of the Game of Life is an infinite,
                      two-dimensional orthogonal grid of square cells, each of
                      which is in one of two possible states, live or dead, (or
                      populated and unpopulated, respectively). Every cell
                      interacts with its eight neighbours, which are the cells
                      that are horizontally, vertically, or diagonally adjacent.
                  </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          {/*<i className="fas fa-sitemap"></i>*/}
                          <h6 className="text-xl font-semibold">1</h6>
                        </div>
                        <p className="mb-4 text-gray-600">
                          Any live cell with fewer than two live neighbours dies,
                          as if by underpopulation.
                      </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          {/*<i className="fas fa-drafting-compass"></i>*/}
                          <h6 className="text-xl font-semibold">2</h6>
                        </div>
                        <p className="mb-4 text-gray-600">
                          Any live cell with two or three live neighbours lives on
                          to the next generation.
                      </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          {/*<i className="fas fa-newspaper"></i>*/}
                          <h6 className="text-xl font-semibold">3</h6>
                        </div>
                        <p className="mb-4 text-gray-600">
                          Any live cell with more than three live neighbours dies,
                          as if by overpopulation.
                      </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          {/*<i className="fas fa-file-alt"></i>*/}
                          <h6 className="text-xl font-semibold">4</h6>
                        </div>
                        {/*<h6 className="text-xl mb-1 font-semibold">
                        Rule 4
                      </h6>*/}
                        <p className="mb-4 text-gray-600">
                          Any dead cell with exactly three live neighbours becomes
                          a live cell, as if by reproduction.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pb-32 pt-48">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-file-alt text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Complex Documentation
                </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    This extension comes a lot of fully coded examples that help
                    you get started faster. You can adjust the colors and also the
                    programming language. You can change the text and images and
                    you're good to go.
                </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Built by Developers for Developers
                        </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted code for Components
                        </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Dynamic Javascript Components
                        </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-xl"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                  }}
                  src={require("assets/img/documentation.png")}
                />
              </div>
            </div>
          </div>

          <div className="justify-center text-center flex flex-wrap mt-24">
            <div className="w-full md:w-6/12 px-12 md:px-4">
              <h2 className="font-semibold text-4xl">Samples</h2>
            </div>
          </div>
        </section>

        <section className="block relative z-1 bg-gray-700">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4  -mt-24">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Carnival shuttle
                  </h5>
                    <Link href="/auth/login">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={require("assets/img/login.jpg")}
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Centinal
                  </h5>
                    <Link href="/profile">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={require("assets/img/profile.jpg")}
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Diuresis
                  </h5>
                    <Link href="/landing">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={require("assets/img/landing.jpg")}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-700 overflow-hidden"></section>

        <section className="pb-16 bg-gray-300 relative pt-32">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
          </div>
        </section>
        <Footer />
        <ShareModal open={this.state.shareModalOpen} close={this.closeModal.bind(this)} />
        <BuyModal open={this.state.buyModalOpen} close={this.closeModal.bind(this)} />
      </>
    );
  }
}

export default Index;