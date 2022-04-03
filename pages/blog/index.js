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
            <Headers title="Blog - Benirabbany" />
            <Navbar />
            <section id="cr" className="w-screen mt-5 mb-auto mx-auto py-8 ">
                <div className="container mx-auto mt-20 mb-20 my-10">
                    <h1 className="text-3xl underline text-center font-bold">Coming soon!</h1>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Home