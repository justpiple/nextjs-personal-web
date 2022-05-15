import React from "react";
import Headers from "../components/Header";
import Footer from "../components/blog/Footer";
import Navbar from "../components/blog/NavBar";


export default function page404() {
    return (
        <React.Fragment>
            <Headers title="Offline... - itsben.space" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="font-inter mx-auto max-w-3xl pt-5 px-6 sm:px-6 xl:max-w-5xl xl:px-0">
                        <h2 className="text-2xl text-center"><b>oops... sepertinya anda sedang offline.</b><br /> Website ini memerlukan internet untuk dibuka.</h2>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}