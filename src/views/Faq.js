import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import Conway from 'components/Conway.js'
export default function FAQ() {
    return (
        <>
            <IndexNavbar transparent />
            <main className="profile-page" >
                <section className=" block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-cover "
                        style={{
                            backgroundImage:
                                "url('/bg2.png')",
                            // "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
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
                </section>

                <section className="relative py-16 bg-gray-300">
                    <div className="px-6 mx-auto">
                        {/* <div style={{ marginTop: '6rem' }}> */}
                        <div className="relative flex flex-col min-w-0 bg-white break-words w-full mb-6 shadow-xl rounded-lg -mt-64" style={{ marginTop: '-16rem' }}>
                            <div className="px-6 py-6">
                                {/* <div className="flex flex-wrap" style={{ justifyContent: 'space-around' }}>
                            <Conway size="30x20" color={1} speed="fast" pattern="Blonker" id="ts1" confined={true} />
                            <Conway size="30x20" color={1} speed="fast" pattern="Cousins" id="ts2" confined={true} />
                            <Conway size="30x20" color={1} speed="fast" pattern="Frog II" id="ts3" confined={true} />
                            <Conway size="30x20" color={1} speed="fast" pattern="Loading dock" id="ts4" confined={true} />
                            <Conway size="30x20" color={1} speed="fast" pattern="Biting off more than they can chew" id="ts5" confined={true} />
                            <Conway size="30x20" color={1} speed="fast" pattern="Jam" id="ts6" confined={true} />
                            <Conway size="30x20" color={1} speed="fast" pattern="Double caterer" id="ts7" confined={true} />
                            <Conway size="30x20" color={1} speed="fast" pattern="38P7.2" id="ts8" confined={true} />
                            <Conway size="30x20" color={1} speed="fast" pattern="55P10" id="ts9" confined={true} />
                        </div> */}
                                <h2 className="pt-4 font-semibold text-4xl text-gray-700">
                                    Frequently Asked Questions
                        </h2>
                                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                                    What is Mystic game of life?
                        </h2>
                                <p>
                                    The inspiration for these NFTs is taken from conway game of life, where change in population is guided by 4 simple rules.
                                <ul className="px-6 ul">
                                        <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                                        <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                                        <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                                        <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                                    </ul>
                                </p>
                                <p className="py-4">
                                    The algorithm is modified to produce unique initial arrangements, which over generations result in oscillatory, chaotic or objective motion.
                                    The placement of population over the grid plane results in music generated by transposing x,y coordinates on the octave of piano keys.
                                </p>
                                <p>
                                    It is possible to interact with grid plane simply by clicking and making cell active. Apart from that, a slider has been provided with each NFT for changing population growth gradient.
                                </p>
                                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                                    How rare are my minted NFT?
                        </h2>
                                <p>
                                    Each token start with unique initial arrangment of alive cells. To make some tokens, ultra rare we kept parameters like grid size and color random with different probability.
                                </p>
                                <p>
                                    <span className="py-1 font-semibold text-xl text-gray-700">
                                        Probability of Grid Size:
                                    </span>
                                    <ul className="px-6">
                                        <li><span className="font-semibold">30x20:</span>{" "} 30%</li>
                                        <li><span className="font-semibold">45x20:</span>{" "} 30%</li>
                                        <li><span className="font-semibold">15x10:</span>{" "} 30%</li>
                                        <li><span className="font-semibold">60x40:</span>{" "} 30%</li>
                                        <li><span className="font-semibold">75x50:</span>{" "} 30%</li>
                                    </ul>
                                </p>
                                <p>
                                    <span className="py-1 font-semibold text-xl text-gray-700">
                                        Probability of Color:</span>
                                    <ul className="px-6">
                                        <li><span className="font-semibold">Red grid:</span>{" "} 31.25%</li>
                                        <li><span className="font-semibold">Black grid:</span>{" "} 31.25%</li>
                                        <li><span className="font-semibold">Blue grid:</span>{" "} 25%</li>
                                        <li><span className="font-semibold">Lime grid:</span>{" "} 12.5%</li>
                                    </ul>
                                </p>

                                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                                    How many tokens are there, and what are the incentives?
                        </h2>
                                <p>
                                    There are total of 390 tokens, with 7 different price brackets. Users can mint at max 10 tokens in 1 go, allowing time for others to capture the opportunity of collecting mystic NFTs.
                                   </p>
                                <p>
                                    The incentives are on referral, and if someone use your referral link for minting new NFTs, they will be getting 7.5% discount and
                                    same amount (7.5% of the price) will be transferred to referrer as referral bonus.
                                </p>
                                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                                    Is there plan for marketplace?
                        </h2>
                                <p>
                                    While designing this project, we kept in mind the importance of a place facilitating exchange of tokens. The smart contract have necessary logic in place to allow easy intregation with
                                {" "}<a href="https://bopensea.com">bopensea.com</a>. Once 33% or 130 tokens are sold, we will apply for bopensea.
                                </p>
                                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                                    Will I be able to trade my mystic GOL after the sale ends?

                                </h2>
                                <p>
                                    All minted Mystic GOL follow the ERC-721 standard and, as a result, can be transferred freely amongst BSC wallets.
                                    In case all tokens are not minted in 2 weeks, there is fail safe method for starting bid/sale of tokens.This will allow users to enjoy trading, before all tokens are minted.

                                </p>



                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    );
}
