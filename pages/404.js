import React from "react";
import Headers from "../components/Header";
import Footer from "../components/blog/Footer";
import Navbar from "../components/blog/NavBar";


export default function page404() {
    return (
        <React.Fragment>
            <Headers title="404 Page not found" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="font-inter mx-auto max-w-3xl pt-5 px-6 sm:px-6 xl:max-w-5xl xl:px-0">
                        <h1 className="border-r-2 border-black p-4 inline-block mr-5 font-extrabold">
                            404
                        </h1>
                        <div className="text-right inline-block" >
                            <h2>This page could not be found.</h2>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}