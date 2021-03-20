import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import Conway from 'components/Conway.js'
export default function FAQ() {
    return (
        <>
            <IndexNavbar transparent />
            <main className="profile-page" >
                <section className="relative block h-500-px">
                    <div
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
                    </div>
                    <div
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
                    </div>
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
                                <p>hi</p>
                                <p>hi</p>
                                <p>hi</p>
                                <p>hi</p>
                                <p>hi</p>
                                <p>hi</p>
                                <p>hi</p>
                                <p>hi</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    );
}
