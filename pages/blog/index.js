import React, { useEffect } from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/blog/NavBar";
import { useRouter } from 'next/router';

function Home() {
    const router = useRouter()
    const { slug } = router.query

    return (
        <React.Fragment>
            <Headers title="Example post - Blog" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="font-inter text-base mx-auto max-w-3xl pt-5 px-6 sm:px-6 xl:max-w-5xl xl:px-0">
                        <h1 className="text-3xl text-center font-bold">Coming soon!</h1>
                        <p className="text-xl text-gray-500">This page is under development.</p>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}

export default Home