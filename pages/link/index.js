import React from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/blog/NavBar";


export default function page404() {
    return (
        <React.Fragment>
            <Headers title="Link shortener - itsben.space" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="font-inter mx-auto max-w-3xl pt-5 px-6 sm:px-6 xl:max-w-5xl xl:px-0 text-center">
                        <h1 className="font-semibold">
                            itsben.space link shortener
                        </h1>
                        <a href="https://l.itsben.space" className="duration-300 hover:text-cyan-400 hover:underline underline-offset-1">l.itsben.space</a>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}