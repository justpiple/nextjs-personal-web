import React, { useState } from "react";
import AcLink from "./ActiveLink";


function NavBar() {
    const [navShow, toggleNav] = useState(false);
    return (
        <React.Fragment>
            <div className={"sidenav" + (navShow ? " sideActive" : "")}>
                <div data-aos="text-center">
                    <a href="#" className="text-white hover:text-gray-400 text-lg">
                        About Me
                    </a>
                    <a href="#skill" className="text-white hover:text-gray-400 text-lg">
                        Skill
                    </a>
                    <a href="#cr" className="text-white hover:text-gray-400 text-lg">
                        Certificate
                    </a>
                    <a href="#school" className="text-white hover:text-gray-400 text-lg">
                        School
                    </a>
                    <AcLink href="/blog" className="text-white hover:text-gray-400 text-lg">
                        Blog
                    </AcLink>
                    <a href="https://my.masben.studio" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-lg">
                        Contact
                    </a>
                </div>
            </div>
            <section style={{ zIndex: 999 }} className="bg-white sticky top-0 z-50 w-screen mx-auto px-4">
                <nav className="flex flex-wrap p-6 justify-between">
                    <div className="h-10 w-100 mr-5">
                        <a className="text-2xl no-underline font-sans font-bold" href="#">ben</a>
                    </div>
                    <div onClick={() => toggleNav(!navShow)} className="block md:hidden" style={{ cursor: "pointer" }}>
                        <a
                            className="flex items-center px-3 py-2 rounded border border-indigo-400 text-indigo-400 hover:text-indigo-700 hover:border-indigo-700">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </a>
                    </div>
                    <div className="navbr w-full hidden flex-grow md:flex md:flex-row md:items-center md:w-auto">
                        <div className="text-sm md:flex-grow"></div>
                        <div data-aos="fade-down">
                            <a href="#"
                                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 text-lg mr-4">
                                About Me
                            </a>
                            <a href="#skill"
                                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 text-lg mr-4">
                                Skill
                            </a>
                            <a href="#cr"
                                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 text-lg mr-4">
                                Certificate
                            </a>
                            <a href="#school"
                                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 text-lg mr-4">
                                School
                            </a>
                            <AcLink href="/blog"
                                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 text-lg mr-4">
                                Blog
                            </AcLink>
                            <a href="https://my.masben.studio" target="_blank" rel="noopener noreferrer"
                                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 text-lg mr-4">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
            </section>
        </React.Fragment>
    )
}


export default NavBar
