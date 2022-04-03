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
            <Headers title="Example post - Blog" />
            <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="mx-auto max-w-3xl px-8 sm:px-6 xl:-mt-10 xl:max-w-5xl xl:px-0">
                        <article>
                            <header className="xl:pb-4">
                                <div className=" text-center border-b border-gray-400">
                                    <div>
                                        <h1 className="text-4xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">Example post blog</h1>
                                    </div>
                                    <dl className="space-y-1 pb-4">
                                        <div>
                                            <dt className="sr-only">Published on</dt>
                                            <dd className="text-base font-medium leading-6 text-gray-500">
                                                <time>Sunday, April 3, 2022</time>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </header>
                            <div className="pb-10 pt-10">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna sed leo maximus varius in eget mauris. Quisque et rhoncus magna. Curabitur cursus blandit eleifend. Nunc molestie, ante ut facilisis commodo, arcu tellus interdum metus, vitae feugiat neque orci a urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget est metus. Vestibulum finibus nibh vel laoreet commodo. Duis ut maximus sem.</p>
                            </div>
                        </article>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}

export default Home