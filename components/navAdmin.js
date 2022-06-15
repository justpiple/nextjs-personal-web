import React, { useState } from "react";
import AcLink from "./ActiveLink";

function NavBar() {
    const [navShow, toggleNav] = useState(false);
    return (
        <React.Fragment>
            <div id="mobileMenu" className={"sidenavFull opacity-95 " + (navShow ? " sideActive" : "")}>
                <div data-aos="text-center">
                    <nav className="fixed mt-8 h-full text-white">
                        <div className="px-12 py-4"><AcLink className="text-xl font-bold tracking-widest hover:text-gray-200" href="/admin">Admin Home</AcLink></div>
                        <div className="px-12 py-4"><AcLink className="text-xl font-bold tracking-widest hover:text-gray-200" href="/api/logout">Logout</AcLink></div>
                        <div className="px-12 py-4"><AcLink className="text-xl font-bold tracking-widest hover:text-gray-200" href="/">Main Page</AcLink></div>
                    </nav>
                </div>
            </div>
            {/* <section style={{ zIndex: 999 }} className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0"> */}
            <nav className="flex items-center justify-between py-6 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                <div className="flex items-center justify-between">
                    <span className="mr-5 text-2xl font-sans font-bold">ben</span>
                </div>
                <div className="flex items-center text-base leading-5">
                    <div onClick={() => toggleNav(!navShow)} className="block md:hidden" style={{ cursor: "pointer" }}>
                        <a
                            className="flex items-center px-3 py-2 rounded border border-indigo-400 text-indigo-400 hover:text-indigo-700 hover:border-indigo-700">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div data-aos="fade-down">
                            <AcLink href="/admin"
                                className="p-1 font-medium text-gray-900 sm:p-4 duration-300 hover:text-cyan-600">
                                Admin Home
                            </AcLink>
                            <AcLink href="/api/logout"
                                className="p-1 font-medium text-gray-900 sm:p-4 duration-300 hover:text-cyan-600">
                                Logout
                            </AcLink>
                            <AcLink href="/"
                                className="p-1 font-medium text-gray-900 sm:p-4 duration-300 hover:text-cyan-600">
                                Main Page
                            </AcLink>
                        </div>
                    </div>
                </div>
            </nav>
            {/* </section> */}
        </React.Fragment>
    )
}
export default NavBar
