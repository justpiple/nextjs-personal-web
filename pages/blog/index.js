import React, { useEffect } from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/blog/NavBar";
import AOS from "aos";

function Home() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 2500,
        });
    }, []);
    return (
        <React.Fragment>
            <Headers title="Blog - benirabbany" />
            <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="mx-auto max-w-3xl px-8 sm:px-6 xl:-mt-10 xl:max-w-5xl xl:px-0">
                        <h1 className="text-3xl underline text-center font-bold">Coming soon!</h1>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}

export default Home